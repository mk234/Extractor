package portals

import com.kment.jsoup.Application
import com.kment.jsoup.idnes.PrepareUrlForArchivesIdnes
import com.kment.jsoup.lidovky.PrepareUrlForArchivesLidovky
import com.kment.jsoup.novinky.PrepareUrlForArchivesNovinky
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import spock.lang.Specification
import spock.lang.Unroll

import java.text.SimpleDateFormat

@SpringBootTest(classes = Application.class)
class PrepareUrlForArchivesSpec extends Specification {

    @Autowired
    PrepareUrlForArchivesLidovky prepareUrlForArchivesLidovky
    @Autowired
    PrepareUrlForArchivesIdnes prepareUrlForArchivesIdnes
    @Autowired
    PrepareUrlForArchivesNovinky prepareUrlForArchivesNovinky

    @Unroll
    def "get #portalName url for date 1.2.2018"() {
        given:
        def extractor = this."prepareUrlForArchives${portalName}"
        when:
        SimpleDateFormat sdf = new SimpleDateFormat("dd.MM.yyyy")
        String dateInString = "01.02.2018"
        Date date = sdf.parse(dateInString)
        String url = extractor.prepareUrl(date)
        then:
        url == result
        where:
        portalName | result
        "Lidovky"  | "https://www.lidovky.cz/archiv.aspx?datum=01.02.2018&idostrova=ln_lidovky"
        "Idnes"    | "https://zpravy.idnes.cz/archiv.aspx?datum=01.02.2018&idostrova=zpravodaj"
        "Novinky"  | "https://www.novinky.cz/archiv?id=966&date=01.02.2018"


    }

}
