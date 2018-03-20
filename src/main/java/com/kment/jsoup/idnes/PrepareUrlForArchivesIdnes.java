package com.kment.jsoup.idnes;

import org.joda.time.DateTime;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;

@Component
public class PrepareUrlForArchivesIdnes {

    public String prepareUrl(Date date) {
        String prefix = "https://zpravy.idnes.cz/archiv.aspx?datum=";
        String postfix = "&idostrova=zpravodaj";
        String dateString = new DateTime(date).toString("dd.MM.yyyy");
        System.out.println(dateString);
        String url = prefix + dateString + postfix;
        System.out.println("idnes");
        return url;
    }

    public String prepareUrlFromString(String date) {
        String prefix = "https://zpravy.idnes.cz/archiv.aspx?datum=";
        String postfix = "&idostrova=zpravodaj";
        System.out.println(date);
        String url = prefix + date + postfix;
        return url;
    }

    public String prepareUrlForYesterday() {
        String prefix = "https://zpravy.idnes.cz/archiv.aspx?datum=";
        String postfix = "&idostrova=zpravodaj";
        final Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, -1);
        Date yesterday = calendar.getTime();
        System.out.println("yes" + yesterday);
        String dateString = new DateTime(yesterday).toString("dd.MM.yyyy");
        System.out.println(dateString);
        String url = prefix + dateString + postfix;
        return url;
    }
}
