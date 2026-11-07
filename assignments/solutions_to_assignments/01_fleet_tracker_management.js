const fleetTracker = {
  companyName: "SwiftMove Logistics",
  activeRoutes: [
    [10, 20],
    [30, 40],
    [50, 60],
  ],
  vehicles: [
    {
      vin: "VIN001",
      model: "Tata Ace",
      status: "active",
      currentLocation: [10, 20],
    },
    {
      vin: "VIN002",
      model: "Mahindra Bolero Pickup",
      status: "active",
      currentLocation: [30, 40],
    },
    {
      vin: "VIN003",
      model: "Ashok Leyland Dost",
      status: "idle",
      currentLocation: [50, 60],
    },
  ],
};

fleetTracker.vehicles[1].status = "maintenance"

fleetTracker.vehicles[0].currentLocation = fleetTracker.activeRoutes[1];

fleetTracker.activeRoutes.push([70, 80]);

fleetTracker.vehicles.unshift({
    vin: "VIN004",
    model: "Eicher Pro",
    status: "active",
    currentLocation: [70, 80]
});

fleetTracker.vehicles.splice(2, 1);

console.log("Company Name:", fleetTracker.companyName);

console.log("Active Routes:", fleetTracker.activeRoutes);

console.log("Vehicles:", fleetTracker.vehicles);