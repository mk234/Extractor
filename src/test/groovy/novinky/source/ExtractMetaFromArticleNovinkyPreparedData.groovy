package novinky.source

import org.jsoup.nodes.Document

class ExtractMetaFromArticleNovinkyPreparedData {

    ParseFromFile parseFromFile = new ParseFromFile()


    Document getArticleAsDocument() {
        return parseFromFile.getDocumentFromFile("html_novinky/article_source/article.htm", "UTF-8")
    }

    def getKeywors() {
        return "d6, dálnice, nehoda,, Krimi"
    }

    def getAuthor() {
        return "ok, jap, Novinky"
    }

    def getDescription() {
        return "Několik desítek minut stála v úterý ráno doprava na dálnici D6 ve směru na Karlovy Vary. Kamiónu se tam převrátil přívěs. Nikdo se nezranil. "
    }

    def getNumberOfComments() {
        return 1
    }

    def getDate() {
        return "03/20/2018 08:47"
    }
}
