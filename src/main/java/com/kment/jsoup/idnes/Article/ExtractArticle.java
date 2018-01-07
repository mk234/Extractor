package com.kment.jsoup.idnes.Article;

import com.kment.jsoup.idnes.NumberOfPages;
import com.kment.jsoup.idnes.ParseUrl;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@Component
public class ExtractArticle {

    public List<ArticleEntity> findArticle(String url) throws IOException, ParseException {
        List<ArticleEntity> commentList = new ArrayList<>();
        String urlForNextPage;
        ParseUrl parseUrl = new ParseUrl();
        Document document = parseUrl.parse(url);
        NumberOfPages numberOfPage = new NumberOfPages();



        String selectorContributions = "div#content";
        int numberOfPages = numberOfPage.numberOfPages(document, selectorContributions);
        String selectorContribution = "div.art";

        Element contributions = document.select(selectorContributions).first();
        Elements selectedDivs = contributions.select(selectorContribution);
        commentList.addAll(getComments(selectedDivs));

        for (int i = 2; i <= numberOfPages; i++) {
            urlForNextPage = getDocumentForNextPage(url, i);
            document = parseUrl.parse(urlForNextPage);
            contributions = document.select(selectorContributions).first();
            selectedDivs = contributions.select(selectorContribution);
            commentList.addAll(getComments(selectedDivs));
        }


        return commentList;
    }


    private String getDocumentForNextPage(String url, int i) {
        return url + "&strana=" + i;
    }

    private List<ArticleEntity> getComments(Elements selectedDivs) throws ParseException {
        List<ArticleEntity> commentList = new ArrayList<>();
        String selectorName = "div.cell";
        String selectorDate = "span.time-date";
        for (Element div : selectedDivs) {
            Element cell = div.select(selectorName).first();
            Elements name = cell.select("h3");
            Element date = div.select(selectorDate).first();
            Element  link = name.select("a").first();
            String absHref = link.attr("abs:href");
            commentList.add(new ArticleEntity(name.text(), absHref, date.text(), date.text(), "key"));
        }
        return commentList;
    }
}
