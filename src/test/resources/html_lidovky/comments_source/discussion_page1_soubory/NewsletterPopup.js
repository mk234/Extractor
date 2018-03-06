!function(){var t=function(){function t(t){this.parentNode=t||document.body,this.createDOM(),this.persistentState={newsletterDecision:"undecided",lastQuery:Date.now(),queryCount:0}}return t.prototype.onYesClick=function(){this.persistentState.newsletterDecision="enabled",this.savePersistentState(),this.log("success")},t.prototype.onNoClick=function(){this.persistentState.newsletterDecision="disabled",this.savePersistentState(),this.log("hide"),this.hide()},t.prototype.run=function(){this.getShouldBeDisplayed()&&this.display()},t.prototype.display=function(){this.log("display"),this.parentNode.appendChild(this.element)},t.prototype.hide=function(){this.parentNode.removeChild(this.element)},t.prototype.getVariant=function(){var t=[{question:"Rann� briefing: nejd�le�it�j�� zpr�vy dne ve va�� schr�nce. Objednejte zde"},{question:"Zapn�te si rann� briefing Lidovek.cz"},{question:"P�ihla�te se k odb�ru rann�ho briefingu. Rychl� p�ehled zpr�v"}];return this.variantId=Math.floor(Math.random()*t.length),t[this.variantId]},t.prototype.getShouldBeDisplayed=function(){var t=localStorage.getItem("newsletter-popup");if(t){if(this.persistentState=JSON.parse(t),"undecided"!==this.persistentState.newsletterDecision)return console.log("Notitications: not displaying, decision made: "+this.persistentState.newsletterDecision),!1;var e=new Date(this.persistentState.lastQuery),n=new Date,o=(n.getTime()-e.getTime())/864e5,i=!1;if(this.persistentState.queryCount<=3){var p=n.getDate()!==e.getDate();(o>.25&&p||o>1)&&(console.log("Notifications: displaying, < 3 views, > 1 day"),i=!0)}else o>7&&(i=!0,console.log("Notifications: displaying, > 1 week"));return!0===i?(this.persistentState.queryCount+=1,this.persistentState.lastQuery=Date.now(),this.savePersistentState()):console.log("Notitications: not displaying, under timeout"),i}return this.persistentState={newsletterDecision:"undecided",lastQuery:Date.now(),queryCount:0},console.log("Notitications: not displaying, new"),this.savePersistentState(),this.tryLoadFromLegacyGlobalStorage(),!1},t.prototype.tryLoadFromLegacyGlobalStorage=function(){window.GlobalStorage&&window.GlobalStorage.read("newsletter-popup",function(t){t&&localStorage.setItem("newsletter-popup",t)})},t.prototype.savePersistentState=function(){localStorage.setItem("newsletter-popup",JSON.stringify(this.persistentState))},t.prototype.log=function(t){var e="briefing-okno-"+this.variantId+"-"+t;window.Log&&window.Log.ping(window.location.toString(),e)},t.prototype.createDOM=function(){var t=this;this.element=document.createElement("div"),this.element.id="newsletter-popup";var e=this.getVariant();this.element.innerHTML="<b>"+e.question+'</b>\n                <form action="https://www.lidovky.cz/ctenarsky-prukaz/Emailizace.aspx" method="post">\n                    <label for="pop-inp-email">V� e-mail</label>\n                    <input type="email" name="email" id="pop-inp-email" placeholder="jan.novak@lidovky.cz">\n                    <input type="hidden" name="save" value="Objednat">\n                    <input type="hidden" name="add-only" value="1">\n                    <button id="top-inp-submit">P�ihl�sit</button>\n                    <button id="top-inp-hide">Ne, d�kuji</button>\n                    <input type="hidden" name="obj" value="ln_newsletter_top">\n                </form>',this.element.querySelector("form").addEventListener("submit",function(){t.onYesClick()}),this.element.querySelector("#top-inp-hide").addEventListener("click",function(e){e.preventDefault(),t.onNoClick()});var n=document.createElement("style");n.innerHTML="\n            #newsletter-popup {\n                position: fixed;\n                top: 0;\n                left: 50%;\n                transform: translate(-50%, 0);\n                background: white;\n                border-bottom-left-radius: 3px;\n                border-bottom-right-radius: 3px;\n                padding: 15px 20px 20px 20px;\n                font-size: 14px;\n                color: #666666;\n                font-family: Roboto, 'Fira Sans', helvetica, arial, sans-serif;\n                box-shadow: 0 2px 6px rgba(0,0,0,0.2);\n                line-height: 1.5em;\n                text-align: left;\n                z-index: 9999;\n                cursor: auto;\n                width: calc(100% - 60px);\n                max-width: 500px;\n            }\n            \n            @media screen and (max-width: 1023px) {\n                #newsletter-popup {\n                    top: auto;\n                    bottom: 0;\n                    box-shadow: 0 -2px 6px rgba(0,0,0,0.2);\n                    border-radius: 0;\n                    border-top-left-radius: 3px;\n                    border-top-right-radius: 3px;\n                }\n            }\n            #newsletter-popup::before {\n                content: \"\";\n                position: absolute;\n                top: 50%;\n                transform: translate(0, -50%);\n                left: 20px;\n                background: transparent url('https://1gr.cz/u/favicon/apple-touch-icon/lidovky-transparent.png');\n                background-size: contain;\n                width: 60px;\n                height: 60px;\n            }\n            #newsletter-popup > b, #newsletter-popup > span {\n                display: block;\n                padding-left: 80px;\n            }\n            #newsletter-popup > b {\n                text-transform: uppercase;\n                font-weight: normal;\n            }\n            #newsletter-popup form {\n                margin-top: 8px;\n                margin-left: 80px;\n                position: relative;\n                padding-top: 24px;\n            }\n            #newsletter-popup label {\n                position: absolute;\n                top: 0;\n                left: 0;\n            }\n            #newsletter-popup input {\n                appearance: none;\n                -webkit-appearance: none;\n                padding: 10px 10px;\n                border: 1px solid #aaa;\n                border-radius: 3px;\n                width: 170px;\n            }\n            #newsletter-popup button {\n                font-size: 14px;\n                display: inline-block;\n                text-align: center;\n                text-transform: uppercase;\n                text-decoration: none;\n                color: #4285f4;\n                border-radius: 3px;\n                appearance: none;\n                -webkit-appearance: none;\n                border: 0;\n                cursor: pointer;\n                padding: 10px 10px;\n            }\n            #newsletter-popup button#top-inp-hide {\n                background: white;\n                float: right;\n            }\n            #newsletter-popup button#top-inp-hide:hover {\n                text-decoration: underline;\n            }\n            #newsletter-popup button#top-inp-submit {\n                margin-left: 20px;\n                background-color: #1976D2;\n                color: white;\n                box-shadow: 0 3px 5px rgba(0,0,0,0.2);\n            }\n            #newsletter-popup button#top-inp-submit:hover {\n                background-color: #1E88E5;\n            }\n            #newsletter-popup button#top-inp-submit:active {\n                background-color: #0D47A1;\n            }\n            @media screen and (max-width: 555px) {\n                #newsletter-popup {\n                    padding-bottom: 0;\n                }\n                #newsletter-popup b {\n                    display: block;\n                    min-height: 65px;\n                }\n                #newsletter-popup form {\n                    margin-left: 0;\n                }  \n                #newsletter-popup form input {\n                    box-sizing: border-box;\n                    width: 100%;\n                }\n                #newsletter-popup form button {\n                    margin-top: 10px;\n                    box-sizing: border-box;\n                    width: 100%;\n                    float: right;\n                    clear: both;\n                }\n                #newsletter-popup form button#top-inp-hide {\n                    margin-top: 0;\n                    margin-bottom: 0;\n                }\n                \n                #newsletter-popup::before {\n                    top: 20px;\n                    transform: none;\n                }\n            }\n            ",document.head.appendChild(n)},t}();window.Promise&&null!==window.localStorage&&"https://www.lidovky.cz"===window.location.href.substr(0,22)&&(window.notifikacePopup=(new t).run())}();