package com.kment.jsoup.lidovky;

import org.joda.time.DateTime;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;

//pouze prepsani url, udelat genericky
@Component
public class PrepareUrlForArchivesLidovky {

    public String prepareUrl(Date date) {
        String prefix = "https://www.lidovky.cz/archiv.aspx?datum=";
        String postfix = "&idostrova=ln_lidovky";
        String dateString = new DateTime(date).toString("dd.MM.yyyy");
        System.out.println(dateString);
        String url = prefix + dateString + postfix;
        System.out.println("lidovku");
        return url;
    }

    public String prepareUrlForYesterday() {
        String prefix = "https://www.lidovky.cz/archiv.aspx?datum=";
        String postfix = "&idostrova=ln_lidovky";
        final Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, -1);
        Date yesterday = calendar.getTime();
        String dateString = new DateTime(yesterday).toString("dd.MM.yyyy");
        System.out.println(dateString);
        String url = prefix + dateString + postfix;
        return url;
    }
}
