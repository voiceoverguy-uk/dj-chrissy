# Search visibility checks after publishing

The local build produces distinct HTML for `/`, `/about`, `/events` and `/contact`. These checks apply to the published site after the updated Vercel build is deployed.

1. Fetch each URL without JavaScript. Confirm a 200 response, a different relevant title/description for each page, and one self-referencing canonical. Confirm the homepage, inner pages and `/sitemap.xml` contain the expected www URLs.
2. Check `https://www.djshakeywakey.co.uk/robots.txt` is plain text and permits the public pages. Confirm `https://djshakeywakey.co.uk/about` redirects permanently to the www page.
3. Request an invented URL and an old WordPress asset URL such as `/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/img/image-masking/svg-shapes/`. Both should return 404, not the homepage. `/projects/` should permanently redirect to `/events`.
4. In Google Search Console, inspect the homepage and three inner pages. Check *Google-selected canonical*, *Page indexing* and rendered HTML, then submit the sitemap and request indexing for changed pages if needed. Under *Performance → Search results*, compare impressions, clicks and query positions for terms such as “DJ hire Wakefield”, “wedding DJ Wakefield”, “party DJ Wakefield” and the business name over time. Public search screenshots do not establish a stable ranking.
5. As the owner, check whether a Google Business Profile exists and is verified. Keep its name, contact details, service area, service categories, photos and website link accurate; invite genuine customer reviews without incentives. The website cannot edit or verify the profile for you.

Google can render JavaScript, but serving correct initial metadata avoids conflicting canonical signals. FAQ answers may still help visitors; do not expect FAQ rich results from their markup.