(ns mazda.views
  (:require [re-frame.core :as re-frame]))

;; navbar
(defn navbar []
  (fn []
    [:ul.navbar
     [:li.navitem [:img.logo {:src "https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg"}]]
     [:li.navitem [:a {:href "#/"} "Nightshell"]]
     [:li.navitem [:a {:href "#/blog"} "Blog"]]
     [:li.navitem [:a {:href "#/portfolio"} "Portfolio"]]
     [:li.navitem [:a {:href "#/about"} "About"]]]
    ))

;; home
(defn home-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
    [:div "This is the Home Page."
     [:div [:a {:href "#/about"} "go to About Page"]]])))

;; blog
(defn blog-panel []
  (fn []
    [:div "This is the Blog Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))

;; portfolio
(defn portfolio-panel []
  (fn []
    [:div "This is the Portfolio Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))

;; about
(defn about-panel []
  (fn []
    [:div "This is the About Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))

;; main

(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :blog-panel [] [blog-panel])
(defmethod panels :portfolio-panel [] [portfolio-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :default [] [:div])

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [:div
      [navbar]
      [show-panel @active-panel]])))
