// spacelaunches.html - API call to https://thespacedevs.com/llapi
const displayFlights = (flights) => {

    const targetParentElement = document.querySelector("#target");
  
    
    let flightCount = 0;
  
    flights.results.forEach(flight => {
  
      let bsDiv1 = document.createElement("div");
      bsDiv1.className = "spaceCard";
      bsDiv1.dataset.aos = 'fade-up';
  
      let bsDiv2 = document.createElement("div");
      bsDiv2.className = "rounded-4 bg-base shadow-effect";
  
      let bsDiv3 = document.createElement("div");
      //bsDiv3.className = "rounded-4 p-4";
  
      let flightDiv = document.createElement("div");
      flightDiv.className = "flightDiv rounded-4 p-4";
  
      let flightHeader = document.createElement("h3");
      flightHeader.innerText = flight.name;
  
      let flightTextLauncher = document.createElement("p");
      flightTextLauncher.innerHTML = `<strong>Launcher:</strong>&nbsp;&nbsp;&nbsp; ${flight.launch_service_provider.name} `;
      flightTextLauncher.classList = "";
  
      let flightTextRocket = document.createElement("p");
      flightTextRocket.innerHTML = `<strong>Rocket:</strong>&nbsp;&nbsp;&nbsp; ${flight.rocket.configuration.name} `;
  
      let flightText2 = document.createElement("p");
      flightText2.innerHTML = `<strong>Status:</strong>&nbsp;&nbsp;&nbsp; ${flight.status.name} `;
  
      let flightText3 = document.createElement("p");
      flightText3.innerHTML = `<strong>Mission: </strong>&nbsp;&nbsp;&nbsp; ${flight.mission.name} - ${flight.mission.type} `;
  
      let flightText4 = document.createElement("p");
      flightText4.innerText = flight.mission.description;
  
      let flightThumbNail = document.createElement("img");
      flightThumbNail.src = flight.image.thumbnail_url;
      flightThumbNail.className = "imgSpaceLaunch rounded-4";
  
      let flightText5 = document.createElement("p");
      flightText5.innerText = flight.pad.location.name;
  
  
      flightDiv.appendChild(flightHeader);
      flightDiv.appendChild(flightThumbNail);
      flightDiv.appendChild(flightTextLauncher);
      flightDiv.appendChild(flightTextRocket);
  
      if (flight.window_start) {
  
        //const isoString = '2024-12-12T07:20:00Z';
        const isoString = flight.window_start;
        const date = new Date(isoString);
  
        // Custom formatting
        //const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDate = date.toLocaleString('en-US', options);
  
        // console.log(formattedDate);
        let flightTextWindow = document.createElement("p");
        flightTextWindow.innerHTML = `<strong>Launch Start Window:</strong><br>${formattedDate}`;
        flightDiv.appendChild(flightTextWindow);
      }
  
      flightDiv.appendChild(flightText2);
      flightDiv.appendChild(flightText3);
      flightDiv.appendChild(flightText4);
      flightDiv.appendChild(flightText5);
  
      bsDiv3.appendChild(flightDiv);
      bsDiv2.appendChild(bsDiv3);
      bsDiv1.appendChild(bsDiv2);
  
      targetParentElement.appendChild(bsDiv1);
    });
  }
  
  
  async function getData() {
    //const url="https://ll.thespacedevs.com/2.3.0/launches/upcoming/?format=json";
    const url = "https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?format=json";
  
    try {
      const response = await fetch(url);
      const json = await response.json();
      //console.log(json);
      displayFlights(json);
    } catch (error) {
      console.error(`An error occurred: ${error} .......`);
    }
  }
  
  // call our asynchronous getData function
  getData();