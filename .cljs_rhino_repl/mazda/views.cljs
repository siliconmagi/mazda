(ns mazda.views
  (:require [re-frame.core :as re-frame]))

;; navbar
(defn navbar []
  (let [active-panel (re-frame/subscribe [:active-panel]) lih "#530d0d" lib "#871B02" lip "#871B02" lia "#871B02"]
    (fn []
      (defn ui-active [] 
        (= @active-panel :home-panel) (js/console.log "blog")
        (= @active-panel :blog-panel) (js/console.log "blog")
        (= @active-panel :portfolio-panel) (js/console.log "port")
        (= @active-panel :about-panel) (js/console.log "about")
        )
      [:ul.navbar
       [:img.logo {:src "https://cdn.rawgit.com/siliconmagi/pictures/master/atar.svg"}]
       [:li.navitem [:a {:href "#/" :style {:background stylea}} "Nightshell"]]
       [:li.navitem [:a {:href "#/blog"} "Blog"]]
       [:li.navitem [:a {:href "#/portfolio"} stylen]]
       [:li.navitem [:a {:href "#/about"} @active-panel]]
       ])))

;; home
(defn home-panel []
  (fn []
    [:div.container "This is the Home Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]
    ))

;; blog
(defn blog-panel []
  (fn []
    [:div.container "This is the Blog Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))

;; portfolio
(defn portfolio-panel []
  (fn []
    [:div.container "This is the Portfolio Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))

;; about
(defn about-panel []
  (fn []
    [:div.container "This is the About Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))

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

