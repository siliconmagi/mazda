(defproject mazda "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [reagent "0.6.0"]
                 [re-frame "0.8.0"]
                 [re-frisk "0.3.1"]
                 [secretary "1.2.3"]]

  :plugins [[lein-figwheel "0.5.8"]
            [lein-cljsbuild "1.1.4"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]
  :figwheel {
             :css-dirs ["resources/public/css"]
             :nrepl-port 7888
             }
  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.8.2"]
                   [figwheel-sidecar "0.5.8"]
                   [com.cemerick/piggieback "0.2.1"]]


    ;; need to add dev source path here to get user.clj loaded
    :source-paths ["src" "dev"]
    ;; for CIDER
    ;; :plugins [[cider/cider-nrepl "0.12.0"]]
    :repl-options {; for nREPL dev you really need to limit output
                   :init (set! *print-length* 50)
                   :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
    }}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "mazda.core/mount-root"
                    :open-urls ["http://localhost:3449/index.html"]
                    }
     :compiler     {:main                 mazda.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload]
                    :external-config      {:devtools/config {:features-to-install :all}}
                    }}

    {:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            mazda.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}
    ]}

  )
