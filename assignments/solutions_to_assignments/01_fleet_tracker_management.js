// CHANGE HIGHLIGHTS: Added all seven required reusable functions, input/index
// validation, safe route copying, backward maintenance removal, and both new
// vehicles in the required order.

const fleetTracker = {
    companyName: "SwiftMove Logistics",
    activeRoutes: [
        [10, 20],
        [30, 40],
        [50, 60]
    ],
    vehicles: [
        {
            vin: "VIN001",
            model: "Tata Ace",
            status: "active",
            currentLocation: [10, 20]
        },
        {
            vin: "VIN002",
            model: "Mahindra Bolero Pickup",
            status: "active",
            currentLocation: [30, 40]
        },
        {
            vin: "VIN003",
            model: "Ashok Leyland Dost",
            status: "idle",
            currentLocation: [50, 60]
        }
    ]
};

function isValidVehicleIndex(fleet, vehicleIndex) {
    return fleet
        && Array.isArray(fleet.vehicles)
        && Number.isInteger(vehicleIndex)
        && vehicleIndex >= 0
        && vehicleIndex < fleet.vehicles.length;
}

// CHANGE: Invalid indexes now return false instead of causing a crash.
function updateVehicleStatus(fleet, vehicleIndex, newStatus) {
    if (!isValidVehicleIndex(fleet, vehicleIndex) || typeof newStatus !== "string" || !newStatus.trim()) {
        return false;
    }

    fleet.vehicles[vehicleIndex].status = newStatus;
    return true;
}

// CHANGE: Route coordinates are copied so vehicle updates cannot mutate a route.
function updateVehicleLocation(fleet, vehicleIndex, routeIndex) {
    if (
        !isValidVehicleIndex(fleet, vehicleIndex)
        || !Array.isArray(fleet.activeRoutes)
        || !Number.isInteger(routeIndex)
        || routeIndex < 0
        || routeIndex >= fleet.activeRoutes.length
    ) {
        return false;
    }

    const route = fleet.activeRoutes[routeIndex];
    if (!Array.isArray(route) || route.length !== 2 || !route.every(Number.isFinite)) {
        return false;
    }

    fleet.vehicles[vehicleIndex].currentLocation = route.slice();
    return true;
}

function addDeliveryRoute(fleet, coordinates) {
    if (
        !fleet
        || !Array.isArray(fleet.activeRoutes)
        || !Array.isArray(coordinates)
        || coordinates.length !== 2
        || !coordinates.every(Number.isFinite)
    ) {
        return false;
    }

    fleet.activeRoutes.push(coordinates.slice());
    return fleet.activeRoutes.length;
}

// CHANGE: Iterate backward so consecutive maintenance vehicles are not skipped.
function removeMaintenanceVehicles(fleet) {
    if (!fleet || !Array.isArray(fleet.vehicles)) {
        return 0;
    }

    let removedCount = 0;
    for (let index = fleet.vehicles.length - 1; index >= 0; index--) {
        if (fleet.vehicles[index].status === "maintenance") {
            fleet.vehicles.splice(index, 1);
            removedCount++;
        }
    }
    return removedCount;
}

function addVehiclesToBeginning(fleet, newVehicles) {
    if (!fleet || !Array.isArray(fleet.vehicles) || !Array.isArray(newVehicles)) {
        return false;
    }

    const allVehiclesValid = newVehicles.every(vehicle =>
        vehicle
        && typeof vehicle.vin === "string"
        && vehicle.vin.trim()
        && typeof vehicle.model === "string"
        && vehicle.model.trim()
        && typeof vehicle.status === "string"
        && vehicle.status.trim()
        && Array.isArray(vehicle.currentLocation)
        && vehicle.currentLocation.length === 2
        && vehicle.currentLocation.every(Number.isFinite)
    );

    if (!allVehiclesValid) {
        return false;
    }

    fleet.vehicles.unshift(...newVehicles);
    return fleet.vehicles.length;
}

function getActiveRouteCount(fleet) {
    return fleet && Array.isArray(fleet.activeRoutes) ? fleet.activeRoutes.length : 0;
}

function displayFleetTracker(fleet) {
    console.log("Company:", fleet.companyName);
    console.log("Route count:", getActiveRouteCount(fleet));
    console.log("Active routes:", fleet.activeRoutes);
    console.log("Vehicles:", fleet.vehicles);
    console.log("Final fleet tracker:", JSON.stringify(fleet, null, 2));
}

// Required execution sequence
console.log("Status updated:", updateVehicleStatus(fleetTracker, 1, "maintenance"));
console.log("Location updated:", updateVehicleLocation(fleetTracker, 0, 1));
console.log("Route count after adding:", addDeliveryRoute(fleetTracker, [70, 80]));
console.log("Maintenance vehicles removed:", removeMaintenanceVehicles(fleetTracker));

const newVehicles = [
    {
        vin: "VIN004",
        model: "Tata Intra",
        status: "active",
        currentLocation: [70, 80]
    },
    {
        vin: "VIN005",
        model: "Eicher Pro",
        status: "idle",
        currentLocation: [10, 20]
    }
];

console.log("Vehicle count after registration:", addVehiclesToBeginning(fleetTracker, newVehicles));
console.log("Final active route count:", getActiveRouteCount(fleetTracker));
displayFleetTracker(fleetTracker);
