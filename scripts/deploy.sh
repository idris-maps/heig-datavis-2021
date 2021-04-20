rm -rf site

mkdir site

mkdir site/20210226

mkdir site/20210226/intro
npx middle-manager -md 20210226/intro.md -o site/20210226/intro/index.html

mkdir site/20210226/svg
cp 20210226/exemples_svg_web/css.html site/20210226/svg/css.html
cp 20210226/exemples_svg_web/css_animation.html site/20210226/svg/css_animation.html
cp 20210226/exemples_svg_web/js_event.html site/20210226/svg/js_event.html
cp 20210226/exemples_svg_web/js.html site/20210226/svg/js.html
cp 20210226/exemples_svg_web/js_animation.html site/20210226/svg/js_animation.html
cp 20210226/exemples_svg_web/css_js.html site/20210226/svg/css_js.html

mkdir site/dom
cp -avr modules/manipulation_dom/js/* site/dom/js
(cd modules/manipulation_dom/d3; npm install; npm run build)
cp -avr modules/manipulation_dom/d3/public/* site/dom/d3
(cd modules/manipulation_dom/react; npm install; npm run build)
cp -avr modules/manipulation_dom/react/dist/* site/dom/react
(cd modules/manipulation_dom/svelte; npm install; npm run build)
cp -avr modules/manipulation_dom/svelte/public/* site/dom/svelte

mkdir site/batons
(cd modules/batons/batons_d3_v1; npm install; npm run build)
cp -avr modules/batons/batons_d3_v1/public/* site/batons/d3_v1
(cd modules/batons/batons_d3_v2; npm install; npm run build)
cp -avr modules/batons/batons_d3_v2/public/* site/batons/d3_v2
(cd modules/batons/batons_svelte; npm install; npm run build)
cp -avr modules/batons/batons_svelte/public/* site/batons/svelte

mkdir site/batons_anim
(cd modules/batons_anim/batons_anim_d3; npm install; npm run build)
cp -avr modules/batons_anim/batons_anim_d3/public/* site/batons_anim/d3
(cd modules/batons_anim/batons_anim_svelte; npm install; npm run build)
cp -avr modules/batons_anim/batons_anim_svelte/public/* site/batons_anim/svelte

(cd modules/enter_update_exit; npm install; npm run build)
cp -avr modules/enter_update_exit/public/* site/enter_update_exit

(cd modules/rosling; npm install; npm run build)
cp -avr modules/rosling/public/* site/rosling

mkdir site/abstraction
npx middle-manager -md 20210312/abstraction.md -o site/abstraction/index.html

mkdir site/reactivite
(cd modules/reactivite/d3; npm install; npm run build)
cp -avr modules/reactivite/d3/public/* site/reactivite/d3
(cd modules/reactivite/svelte; npm install; npm run build)
cp -avr modules/reactivite/svelte/public/* site/reactivite/svelte

mkdir site/bar-race
(cd modules/bar_race/app; npm install; npm run build)
cp -avr modules/bar_race/app/public/* site/bar-race

mkdir site/texture-filter
(cd modules/batons_texture_filter; npm install; npm run build)
cp -avr modules/batons_texture_filter/public/* site/texture-filter

mkdir site/cartographie
npx middle-manager -md 20210423/cartographie.md -o site/cartographie/index.html

mkdir site/carte-d3-osm
(cd modules/carte-d3-osm; npm install; npm run build)
cp -avr modules/carte-d3-osm/public/* site/carte-d3-osm

mkdir site/carte-d3-shp
(cd modules/carte-d3-shp; npm install; npm run build)
cp -avr modules/carte-d3-shp/public/* site/carte-d3-shp

surge site http://heig-datavis-2021.surge.sh
