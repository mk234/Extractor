package com.kment.jsoup.extractor;

import com.kment.jsoup.entity.Article;
import com.kment.jsoup.entity.Comment;
import com.kment.jsoup.springdata.IArticleSpringDataRepository;
import com.kment.jsoup.springdata.ICommentSpringDataRepository;
import com.kment.jsoup.springdata.IPortalSpringDataRepository;
import org.joda.time.DateTime;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Repository
@Transactional
public class Run implements ApplicationContextAware {
    @Autowired
    IArticleSpringDataRepository articleSpringDataRepository;
    @Autowired
    IPortalSpringDataRepository portalSpringDataRepository;
    @Autowired
    ICommentSpringDataRepository commentSpringDataRepository;
    @PersistenceContext
    EntityManager entityManager;
    @Autowired
    private ApplicationContext applicationContext;

    final static int batchSize = 250;
    List<Comment> commentEntities = new ArrayList<>();
    List<Article> articleEntities = new ArrayList<>();
    String commentUrl = "";
    long idArticle;

    public void extractAndSaveYesterday() throws IOException, ParseException {
        Map<String, IPortalExtractor> extractors = applicationContext.getBeansOfType(IPortalExtractor.class);
       for (IPortalExtractor portalExtractor : extractors.values()) {
            System.out.println(portalExtractor.getPortalName());
            try {
                clearLists();
                articleEntities = portalExtractor.findArticles(portalExtractor.prepareUrlForYesterday());
                saveArticle(portalExtractor);
                saveComments();
                flushAndClearEntityManager();
                System.out.println("yesterday done");
            } catch (Exception e) {
                e.printStackTrace();// TODO log exception
            }
        }
    }

    public void extractAndSaveMultipleDaysBefereYesterday(int numbebOfDaysBeforeYesterday) throws ParseException, IOException {
        Map<String, IPortalExtractor> extractors = applicationContext.getBeansOfType(IPortalExtractor.class);
        for (IPortalExtractor portalExtractor : extractors.values()) {
            try {
                Date datum;
                String day;
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd.MM.yyyy");
                final Calendar calendar = Calendar.getInstance();
                calendar.add(Calendar.DATE, -1);
                for (int i = 0; i < numbebOfDaysBeforeYesterday; i++) {
                    clearLists();
                    calendar.add(Calendar.DATE, -1);
                    Date yesterday = calendar.getTime();
                    day = new DateTime(yesterday).toString("dd.MM.yyyy");
                    datum = simpleDateFormat.parse(day);
                    articleEntities = portalExtractor.findArticles(portalExtractor.prepareUrl(datum));
                    saveArticle(portalExtractor);
                    saveComments();
                    flushAndClearEntityManager();
                }
                System.out.println(numbebOfDaysBeforeYesterday + " done");
            } catch (Exception e) {
                e.printStackTrace();// TODO log exception
            }
        }
    }

    private void flushAndClearEntityManager() {
        entityManager.flush();
        entityManager.clear();
    }

    private void saveComments() {
        System.out.println(commentEntities.size());
        for (int i = 0; i < commentEntities.size(); i++) {
            Comment comment = commentEntities.get(i);
                   entityManager.persist(comment);
            if (i % batchSize == 0) {
                flushAndClearEntityManager();
            }
        }
    }

    private void saveArticle(IPortalExtractor portalExtractor) throws IOException, ParseException {
        for (Article articleEntity : articleEntities) {
            Article savedArticle = articleSpringDataRepository.save(articleEntity);
            idArticle = savedArticle.getId();
            commentUrl = portalExtractor.prepareUrlForCommentPage(articleEntity.getUrl());
            commentEntities.addAll(portalExtractor.findComments(commentUrl, idArticle));
        }
    }


    private void clearLists() {
        commentEntities.clear();
        articleEntities.clear();
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {

    }
}