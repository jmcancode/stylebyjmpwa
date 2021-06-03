import React from "react";

export default function CustomMade() {
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          height: "80vh",
          maxHeight: "100%",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
        id="configurator-container"
      ></div>
      <script
        type="text/javascript"
        src="https://d3ft4hj8gxifhd.cloudfront.net/media/configurator.min.js"
        id="__configurator_script__"
        async
        data-jb="eyJpZGMiOjE5NDYsImsiOiIxZjcxZTM5MyJ9"
        data-target-selector="#configurator-container"
        data-size="responsive"
      ></script>
    </React.Fragment>
  );
}
