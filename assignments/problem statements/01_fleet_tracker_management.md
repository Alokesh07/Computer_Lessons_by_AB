# JavaScript Practical Assessment: Fleet Tracker Management System

**Difficulty:** Intermediate\
**Technology:** Vanilla JavaScript\
**Topics:** Objects, nested arrays, arrays of objects, custom functions,
parameters, `push()`, `unshift()`, `splice()`, index validation, object
mutation, and console output.

## 1. Problem Statement

You are developing a basic fleet management system for a logistics
company. The system maintains the company name, delivery routes, and
registered vehicles.

Create a JavaScript object named `fleetTracker` and implement
custom-defined functions to update vehicle statuses and locations, add
routes, remove vehicles under maintenance, register new vehicles, count
routes, and display the final state.

**Requirement:** Do not perform all operations directly in one block.
Define reusable functions, then call them in the prescribed order.

## 2. Initial Data Structure

Create `fleetTracker` with these properties:

-   `companyName`: a string.
-   `activeRoutes`: a two-dimensional array containing three coordinate
    pairs.
-   `vehicles`: an array of three vehicle objects. Each object has
    `vin`, `model`, `status`, and `currentLocation`, where
    `currentLocation` is an `[x, y]` array.

Use this sample data:

``` javascript
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
```

## 3. Required Custom Functions

### Function 1: `updateVehicleStatus(fleetTracker, vehicleIndex, newStatus)`

-   Validate that the vehicle index exists.
-   Update the selected vehicle's `status`.
-   Handle an invalid index without crashing.
-   Return a success indicator or meaningful result.

**Required operation:** Change the vehicle at index `1` to
`"maintenance"`.

### Function 2: `updateVehicleLocation(fleetTracker, vehicleIndex, routeIndex)`

-   Validate the vehicle and route indices.
-   Read the coordinate pair from `activeRoutes[routeIndex]`.
-   Update the selected vehicle's `currentLocation` to match the route.
-   Avoid unintentionally modifying the route's coordinate array.
-   Return a success indicator or meaningful result.

**Required operation:** Update the vehicle at index `0` to match the
second route, at index `1`.

### Function 3: `addDeliveryRoute(fleetTracker, coordinates)`

-   Validate that `coordinates` contains exactly two numeric values.
-   Append the coordinate pair to `activeRoutes` using `push()`.
-   Preserve the nested-array structure.
-   Return the updated route count or another meaningful result.

**Required operation:** Add `[70, 80]`.

### Function 4: `removeMaintenanceVehicles(fleetTracker)`

-   Identify every vehicle whose status is `"maintenance"`.
-   Remove those vehicles using `splice()`.
-   Ensure consecutive maintenance vehicles are not skipped.
-   Return the number of vehicles removed.

**Constraint:** Use `splice()`; do not substitute `filter()`.

### Function 5: `addVehiclesToBeginning(fleetTracker, newVehicles)`

-   Accept an array containing two new vehicle objects.
-   Validate that each has `vin`, `model`, `status`, and a two-element
    `currentLocation`.
-   Insert both vehicles at the beginning using `unshift()`.
-   Preserve the supplied order.
-   Return the updated vehicle count.

Insert these vehicles in this order:

``` javascript
[
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
]
```

### Function 6: `getActiveRouteCount(fleetTracker)`

-   Return the number of entries in `activeRoutes`.
-   Do not hardcode the result.

### Function 7: `displayFleetTracker(fleetTracker)`

-   Display the company name.
-   Display the route count and all routes.
-   Display all remaining vehicles and their properties.
-   Print the final `fleetTracker` object using readable console output.

## 4. Required Execution Sequence

1.  Create the initial `fleetTracker` object.
2.  Call `updateVehicleStatus()` to change vehicle index `1` to
    `"maintenance"`.
3.  Call `updateVehicleLocation()` to update vehicle index `0` from
    route index `1`.
4.  Call `addDeliveryRoute()` to append `[70, 80]`.
5.  Call `removeMaintenanceVehicles()` to remove all vehicles in
    maintenance.
6.  Call `addVehiclesToBeginning()` to insert the two new vehicles.
7.  Call `getActiveRouteCount()` and print the result.
8.  Call `displayFleetTracker()`.

The order is important: update the location before adding the new route,
and remove maintenance vehicles before inserting the new vehicles.

## 5. Expected Results

-   `activeRoutes` contains four coordinate pairs: `[10, 20]`,
    `[30, 40]`, `[50, 60]`, and `[70, 80]`.
-   The vehicle originally at index `0` has location `[30, 40]`.
-   The vehicle originally at index `1` is removed after its status
    changes to `"maintenance"`.
-   The two new vehicles appear at the beginning in the supplied order.
-   The final vehicle count is `4`.
-   The active route count is `4`.
-   No other vehicle or route is accidentally removed or modified.

## 6. Additional Constraints

1.  Use `const` and `let`; do not use `var`.
2.  Define each function separately.
3.  Pass the tracker object and relevant values as parameters.
4.  Use `push()`, `splice()`, and `unshift()` for their specified
    operations.
5.  Do not hardcode final counts.
6.  Validate indices and malformed inputs.
7.  Use plain JavaScript without external libraries.
8.  Keep functions focused on one responsibility.

## 7. Deliverables

Submit:

-   Complete JavaScript source code.
-   All seven custom functions.
-   Function calls in the required sequence.
-   Console output showing the route count and final object.
-   A short explanation of `push()`, `splice()`, and `unshift()`.

## 8. Evaluation Rubric

  Assessment area                               Marks
  ----------------------------------------- ---------
  Initial object structure                         10
  Function design and parameters                   20
  Status and location updates                      15
  Correct use of `push()`                          10
  Correct use of `splice()`                        15
  Correct use of `unshift()` and ordering          10
  Route count and final output                     10
  Validation and code quality                      10
  **Total**                                   **100**

**Interviewer tip:** Watch how the candidate removes items while
iterating. Removing array elements while moving forward can skip
consecutive matches unless the index is managed carefully. Also check
that `unshift()` preserves the order of the two new vehicles.
