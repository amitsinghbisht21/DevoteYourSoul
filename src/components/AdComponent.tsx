import { useEffect } from "react";

/**
 * AdComponent
 * - Uses your AdSense client ID + slot
 * - Only one eslint disable line to allow calling the adsbygoogle push
 *
 * Replace data-ad-slot if you create other ad units.
 */

const AD_CLIENT = "ca-pub-1682168765289599";
const AD_SLOT = "5802456201";

export default function AdComponent() {
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;

      if (w && w.adsbygoogle) {
        // If adsbygoogle is already present, push to render the ad.
        // This may throw if Google script hasn't fully initialized, so it's wrapped in try/catch.
        w.adsbygoogle.push({});
      }
    } catch (err) {
      // silently ignore errors (script not ready, ad blocked, etc.)
      // console.debug("adsense push error:", err);
    }
  }, []);

  return (
    <div style={{ margin: "24px 0", textAlign: "center" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
         data-ad-client="ca-pub-1682168765289599"
     data-ad-slot="5802456201"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
