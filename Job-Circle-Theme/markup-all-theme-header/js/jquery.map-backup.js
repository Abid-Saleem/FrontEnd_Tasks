function initMap() {
    // Define an array to hold your dynamic location data (e.g., from JSON)
    var locations = [
      {
        lat: 37.7749,
        lng: -122.4194,
        name: "San Francisco, CA",
        address: "lat: 39.0997, lng: -94.5786,",
        phone: "+1 212 456 7890",
        imageSrc: 'images/img_90.jpg',
        siteLink:
          "<a href='https://www.google.com/' target='_blank'>Site Link</a>",
      },
      {
        lat: 34.0522,
        lng: -118.2437,
        name: "Los Angeles, CA",
        address: "This is a description text.",
        phone: "+1 212 456 7890",
        imageSrc: 'images/img_89.jpg',
        siteLink:
          "<a href='https://www.google.com/' target='_blank'>Site Link</a>",
      },
      {
        lat: 40.7128,
        lng: -74.0060,
        name: "New York, NY",
        address: "This is a description text.",
        phone: "+1 212 456 7890",
        imageSrc: 'images/img_88.jpg',
        siteLink:
          "<a href='https://www.google.com/' target='_blank'>Site Link</a>",
      },
      {
        lat: 39.0997,
        lng: -94.5786,
        name: "Kansas City",
        address: "This is a description text.",
        phone: "+1 212 456 7890",
        imageSrc: 'images/img_90.jpg',
        siteLink: "<a href='https://www.google.com/' target='_blank'>Site Link</a>",
      },
      {
        lat: 36.1716,
        lng: -115.1391,
        name: "Las Vegas",
        address: "This is a description text.",
        phone: "+1 212 456 7890",
        imageSrc: 'images/img_89.jpg',
        siteLink: "<a href='https://www.google.com/' target='_blank'>Site Link</a>",
      },
      {
        lat: 41.8781,
        lng: -87.6298,
        name: "Chicago",
        address: "This is a description text.",
        phone: "+1 212 456 7890",
        imageSrc: 'images/img_88.jpg',
        siteLink: "<a href='https://www.google.com/' target='_blank'>Site Link</a>",
      },
      {
        lat: 32.7767,
        lng: -96.7970,
        name: "Dallas",
        address: "This is a description text.",
        phone: "+1 212 456 7890",
        imageSrc: 'images/img_90.jpg',
        siteLink: "<a href='https://www.google.com/' target='_blank'>Site Link</a>",
      },
    ];

    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 37.0902, lng: -95.7129 }, // United States coordinates
    });

    var infowindow = new google.maps.InfoWindow();

    // Create custom markers and info windows for your dynamic location data
    for (var i = 0; i < locations.length; i++) {
      var marker = new google.maps.Marker({
        position: { lat: locations[i].lat, lng: locations[i].lng },
        map: map,
        title: locations[i].name,
        icon: {
          url:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 40 51.5' xml:space='preserve'%3E%3Cpath d='M20,0C31,0,40,9,40,20c0,8.9-5.8,16.4-13.8,19L20,51.5l-6.2-12.4C5.8,36.4,0,28.9,0,20C0,8.9,8.9,0,20,0z M20,14.3c-3.2,0-5.7,2.6-5.7,5.7s2.6,5.7,5.7,5.7s5.7-2.6,5.7-5.7S23.2,14.3,20,14.3z' fill='%23f9ab00'/%3E%3C/svg%3E", // Custom pin image URL
          scaledSize: new google.maps.Size(30, 30), // Set the width and height
        },
      });

      // Create a content string for the info window
      var contentString =
        "<div class='map-tooltip'>" +
          "<div class='tooltip-image'>" +
            "<img src='" + locations[i].imageSrc + "' alt='Image Description'>" +
          "</div>" +
          "<strong class='tooltip-title'>" +
            locations[i].name +
          "</strong>" +
          "<p>" +
            locations[i].address +
          "</p>" +
          "<p>" +
            locations[i].phone +
          "</p>" +
          "<p>" +
            locations[i].siteLink +
          "</p>" +
        "</div>";

      google.maps.event.addListener(marker, "click", (function (
        marker,
        contentString
      ) {
        return function () {
          infowindow.setContent(contentString);
          infowindow.open(map, marker);
        };
      })(marker, contentString));
    }
  }