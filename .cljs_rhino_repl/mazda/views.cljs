(ns mazda.views
	(:require [re-frame.core :as re-frame]))


;; home

(defn home-panel []
	(let [name (re-frame/subscribe [:name])]
		(fn []
			[:ul.navbar
			 [:li.navitem [:a {:href "#/"} "Nightshell"]]
			 [:li.navitem [:a {:href "#"} "Blog"]]
			 [:li.navitem [:a {:href "#"} "Portfolio"]]
			 [:li.navitem [:a {:href "#/about"} "About"]]]
			)))


;; about

(defn about-panel []
	(fn []
		[:div "This is the About Page."
		 [:div [:a {:href "#/"} "go to Home Page"]]]))


;; main

(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :default [] [:div])

(defn show-panel [panel-name]
	[panels panel-name])

(defn main-panel []
	(let [active-panel (re-frame/subscribe [:active-panel])]
		(fn []
			[show-panel @active-panel])))
