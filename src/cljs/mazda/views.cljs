(ns mazda.views
  (:require [re-frame.core :as re-frame]))

; https://cdn.rawgit.com/siliconmagi/pictures/master/proto-min.svg
;; home
(defn home-panel []
  (fn []
    [:div.container
     [:h2 "Home"]
     [:div.col
      [:div.col-1 [:img.home {:src "https://cdn.rawgit.com/siliconmagi/pictures/master/proto-min.svg"}]]
      [:div.col-2 [:p "Welcome to Nightshell.com!  This website is a platform for blogging content and web development used by " [:a {:href "https://github.com/siliconmagi"} "Silicon Magi"] ". To read my latest blog entries, check below or see " [:a {:href "#/blog"} "blog"] ". For further information regarding employment or tutoring check out " [:a {:href "#/about"} "about"] "." ]
       [:h3 "Blog content coming soon!"]]]]))

;; blog
(defn blog-panel []
  (fn []
    [:div.container
     [:h2 "Blog"]
     [:p "To be continued" ]]))

;; portfolio
(defn portfolio-panel []
  (fn []
    [:div.container
     [:h2 "Portfolio"]
     [:p "To be continued" ]]))

;; about
(defn about-panel []
  (fn []
    [:div.container
     [:h2 "About"]
     [:div.col
      [:div.col-1 [:img.home {:src ""}]]
      [:div.col-2 [:p.top "Hello friends, I have created this website as a platform for my blogging interests and for web development related to technologies I use as a Full Stack web developer.  I specialize in a stack that includes clojurescript, react, serverless and aws.  The technologies and frameworks that I use are active on this site and are available for review at " [:a {:href "https://github.com/siliconmagi/mazda"} "github" ] ". Also, I have a wide variety of interests beyond web development you may find interesting in the " [:a {:href "#/blog"} "blog"] ".  I hope that your visit here is enjoyable and I look forward to providing exciting new content!"]
       [:p "Github: " [:a {:href "https://github.com/siliconmagi"} "Silicon Magi"]]
       [:p "Email: " [:a {:href "mailto:nightshell@yandex.com"} "nightshell@yandex.com"]]
       [:h3 "Work availability"]
       [:p "Employment: Currently, I am available as a Full Stack web developer and IT professional in the greater Seattle area or remote.  I am also available for consulting or tutoring for the technologies and software listed below.  Please send inquiries to my email " [:a {:href "mailto:nightshell@yandex.com"} "nightshell@yandex.com"] ". My areas of expertise include the following: "]
       [:ul [:h4 "Frontend Web Development Technologies and Frameworks"]
        [:li "HTML5"]
        [:li "CSS3"]
        [:li "SASS"]
        [:li "Javascript"]
        [:li "Clojurescript"]
        [:li "Functional Programming"]
        [:li "React"]
        [:li "Reagent"]
        [:li "Re-frame"]
        [:li "SVG"]
        [:li "Google Analytics"]
        [:li "SEO"]
        ]
       [:ul [:h4 "Backend Web Development Technologies and Frameworks" ]
        [:li "Serverless Framework"]
        [:li "Serverless Design"]
        [:li "AWS"]
        [:li "AWS Lambda"]
        [:li "AWS API Gateway"]
        [:li "AWS DynamoDB"]
        [:li "AWS Cloud Formation"]
        [:li "AWS CLI"]
        [:li "Nodejs"]
        [:li "SSL/TLS"]
        [:li "DNS/Networking"]
        [:li "Encryption"]
        [:li "DevOps build optimizations and scripting"]
        ]
       [:ul [:h4 "IT Technologies and Software"]
        [:li "Linux"]
        [:li "Github"]
        [:li "Command Line"]
        [:li "Windows"]
        [:li "Microsoft Office"]
        [:li "Networking"]
        [:li "Shell Scripting"]
        [:li "VIM"]
        [:li "ZSH"]
        [:li "Photoshop/GIMP"]
        [:li "Inkscape"]
        [:li "Virtual Machines"]
        [:li "Security"]
        [:li "Encryption"]
        ]]]]))

;; forms
(defn form-panel []
  (fn []
    [:div.container
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]
     [:form [:label "Name:" [:input {:type "text" :name "name"}]]]]))

;; main
(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :blog-panel [] [blog-panel])
(defmethod panels :portfolio-panel [] [portfolio-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :form-panel [] [form-panel])
(defmethod panels :default [] [:div])

(defn show-panel [panel-name]
  [panels panel-name])

;; navbar
(defn navbar []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [:ul.navbar
       [:img.logo {:src "https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg"}]
       [:li.navitem [:a {:href "#/"} "Home"]]
       [:li.navitem [:a {:href "#/blog"} "Blog"]]
       [:li.navitem [:a {:href "#/portfolio"} "Portfolio"]]
       [:li.navitem [:a {:href "#/about"} "About"]]
       ])))

;; footer
(defn footer []
  (fn []
    [:ul.footer
     [:img.logo {:src "https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg"}]
     [:p "Nightshell © 2016"]
     ]))

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [:div
       [navbar]
       [show-panel @active-panel]
       [footer]])))

