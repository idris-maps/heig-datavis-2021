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
cp 20210226/exemples_svg_web/css_js.html site/20210226/svg/css_js.html

surge site http://heig-datavis-2021.surge.sh
