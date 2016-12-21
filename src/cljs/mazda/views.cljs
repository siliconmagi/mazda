(ns mazda.views
	(:require [re-frame.core :as re-frame]))

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

;; home
(defn home-panel []
	(fn []
		[:div.container
		 [:h2 "Nightshell"]
		 [:div.col
			[:div.col-1 [:img.home {:src "https://cdn.rawgit.com/siliconmagi/pictures/master/proto-min.svg"}]]
			[:div.col-2 [:p "Welcome to Nightshell.com!  This website is a platform for blogging content and development of web technologies used by " [:a {:href "https://github.com/siliconmagi"} "Silicon Magi"] ". To read my latest blog entries, check below or see " [:a {:href "#/blog"} "blog"]]]]]))

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
     [:h2 "Silicon Magi"]
     [:div.col
			[:div.col-1 [:img.home {:src "https://cdn.rawgit.com/siliconmagi/pictures/master/proto-min.svg"}]]
			[:div.col-2 [:p "Hello friends, I have created this website as a platform for my blogging interests and to develop web technologies I use as a full-stack web developer.  I specialize in a stack that includes clojurescript, react, serverless and aws.  The technologies and frameworks that I use are active on this site and are available for review at " [:a {:href "https://github.com/siliconmagi/mazda"} "github" ] ". Also, I have a wide variety of interests beyond web development you may find interesting in the " [:a {:href "#/blog"} "blog"] ".  I hope that your visit here is enjoyable and I look forward to providing exciting new content!"]
      [:p "Github: " [:a {:href "https://github.com/siliconmagi"} "Silicon Magi"]]
      [:address "Email: " [:a {:href "mailto:nightshell@yandex.com"} "nightshell@yandex.com"]]]]]))

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

(defn main-panel []
	(let [active-panel (re-frame/subscribe [:active-panel])]
		(fn []
			[:div
			 [navbar]
			 [show-panel @active-panel]])))

