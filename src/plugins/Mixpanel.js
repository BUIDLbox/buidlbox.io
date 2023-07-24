import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
  track_pageview: true,
  persistence: "localStorage",
});

export default mixpanel;
