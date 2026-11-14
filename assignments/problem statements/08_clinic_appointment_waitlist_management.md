# JavaScript Practical Assessment: Clinic Appointment and Waitlist Management

**Difficulty:** Advanced  
**Technology:** Vanilla JavaScript  
**Topics:** Objects, nested arrays, custom functions, parameters, validation, `find()`, `findIndex()`, `push()`, `splice()`, sorting, state transitions, and scheduling logic.

## 1. Problem Statement

You are developing an appointment management module for a small clinic. The clinic needs to book patients into provider time slots, place patients on a waitlist when a requested slot is occupied, promote the earliest matching waitlisted patient when a slot becomes available, cancel appointments, reschedule bookings, and display an accurate schedule.

Implement each operation as a reusable function. A cancelled appointment must remain in the appointment history with its status changed to `"cancelled"`; it must not be deleted. A waitlisted patient may be promoted only into the exact provider and time slot they requested.

## 2. Initial Data

Use the following provider records. `slots` lists valid appointment times, and `availableSlots` lists the times currently open for booking.

```javascript
const clinic = {
    providers: [
        {
            id: "P101",
            name: "Dr. Rao",
            specialty: "Cardiology",
            slots: [
                "2026-12-01 09:00",
                "2026-12-01 10:00",
                "2026-12-01 11:00"
            ],
            availableSlots: [
                "2026-12-01 09:00",
                "2026-12-01 10:00",
                "2026-12-01 11:00"
            ]
        },
        {
            id: "P102",
            name: "Dr. Sen",
            specialty: "Dermatology",
            slots: [
                "2026-12-01 09:30",
                "2026-12-01 10:30"
            ],
            availableSlots: [
                "2026-12-01 09:30",
                "2026-12-01 10:30"
            ]
        }
    ],
    appointments: [],
    waitlist: [],
    nextAppointmentNumber: 1,
    nextWaitlistNumber: 1
};
```

An appointment contains `id`, `patient`, `providerId`, `slot`, and `status`. A waitlist entry contains `id`, `patient`, `providerId`, and `slot`. A patient has a non-empty `id`, `name`, and `phone`.

## 3. Required Custom Functions

### Function 1: `bookAppointment(clinic, patient, providerId, slot)`

- Validate the patient fields, provider, and requested slot.
- Accept only a slot listed in that provider's `slots`.
- Book only if the requested time appears in `availableSlots`.
- Remove the time from `availableSlots` with `splice()`.
- Add a `"booked"` appointment using `push()`.
- Generate appointment IDs in sequence as `APT001`, `APT002`, and so on.
- Return the created appointment on success, or a clear failure result without changing clinic data.

### Function 2: `addToWaitlist(clinic, patient, providerId, slot)`

- Validate the patient, provider, and requested slot.
- Add the patient only when the valid requested slot is not currently available.
- Prevent the same patient from having a duplicate booked appointment or waitlist entry for that provider and slot.
- Preserve waitlist insertion order.
- Generate waitlist IDs as `WAIT001`, `WAIT002`, and so on.
- Return the created entry or a clear failure result.

### Function 3: `promoteWaitlistedPatient(clinic, providerId, slot)`

- Find the earliest waitlist entry matching both `providerId` and `slot`.
- If no matching patient is waiting, leave the slot available and return `null`.
- Otherwise remove that entry from the waitlist and book it into the newly available slot.
- Return the new appointment.

### Function 4: `cancelAppointment(clinic, appointmentId)`

- Find an appointment by ID and allow cancellation only when its status is `"booked"`.
- Set its status to `"cancelled"` and return its slot to the provider's `availableSlots`.
- Keep available slots in chronological order.
- Immediately call `promoteWaitlistedPatient()` for the released provider and slot.
- Return the cancelled appointment and any promoted appointment.
- Do not alter clinic data if the appointment cannot be cancelled.

### Function 5: `rescheduleAppointment(clinic, appointmentId, newSlot)`

- Reschedule only an existing `"booked"` appointment.
- The new slot must be a different, valid slot for the same provider and must currently be available.
- Validate the entire change before modifying any data.
- On success, reserve the new slot, release the old slot, update the existing appointment, and promote the earliest matching waitlisted patient for the old slot.
- On failure, leave the appointment and all slot lists unchanged.

### Function 6: `getProviderSchedule(clinic, providerId)`

- Return a new schedule object containing the provider, that provider's booked appointments, and their available slots.
- Sort the returned appointment list by slot without reordering `clinic.appointments`.
- Return a clear not-found result for an unknown provider.

### Function 7: `getClinicSummary(clinic)`

Return an object containing dynamically calculated totals for:

- Booked appointments.
- Cancelled appointments.
- Patients currently on the waitlist.
- Available provider slots.

Do not hardcode the totals.

### Function 8: `displayClinicSchedule(clinic, providerId)`

Display the provider schedule and clinic summary using readable console output.

## 4. Required Execution Sequence

Use these patients and operations in order:

```javascript
const asha = { id: "PAT001", name: "Asha", phone: "9000000001" };
const ravi = { id: "PAT002", name: "Ravi", phone: "9000000002" };
const meera = { id: "PAT003", name: "Meera", phone: "9000000003" };
const dev = { id: "PAT004", name: "Dev", phone: "9000000004" };
```

1. Book Asha with provider `"P101"` at `"2026-12-01 09:00"`.
2. Book Ravi with provider `"P101"` at `"2026-12-01 10:00"`.
3. Add Meera to the waitlist for provider `"P101"` at `"2026-12-01 09:00"`.
4. Add Dev to the waitlist for provider `"P101"` at `"2026-12-01 09:00"`.
5. Reschedule Ravi's appointment (`"APT002"`) to `"2026-12-01 11:00"`.
6. Cancel Asha's appointment (`"APT001"`). The first matching waitlisted patient must be promoted.
7. Display provider `"P101"`'s schedule and the clinic summary.

## 5. Expected Results

### Final appointment history

The appointment array must contain three records:

| Appointment | Patient | Provider | Slot | Status |
|---|---|---|---|---|
| APT001 | Asha | P101 | 2026-12-01 09:00 | cancelled |
| APT002 | Ravi | P101 | 2026-12-01 11:00 | booked |
| APT003 | Meera | P101 | 2026-12-01 09:00 | booked |

### Final waitlist

Only Dev remains waiting for `"P101"` at `"2026-12-01 09:00"`.

### Provider P101 availability

```javascript
["2026-12-01 10:00"]
```

### Clinic summary

```text
Booked appointments: 2
Cancelled appointments: 1
Patients on waitlist: 1
Available provider slots: 3
```

The available-slot total includes both P101's one open slot and P102's two open slots.

## 6. Additional Constraints

1. Use `const` and `let`; do not use `var`.
2. Define reusable functions and pass the clinic, patient, and identifiers through parameters.
3. Use `push()` and `splice()` for the specified array operations.
4. Do not remove cancelled appointments from appointment history.
5. Do not promote a patient from a different provider or time slot.
6. Do not partially apply an invalid booking or rescheduling operation.
7. Calculate schedule and summary values from current data.
8. Use plain JavaScript with no external libraries.

## 7. Deliverables

Submit the complete JavaScript source code, all eight required functions, calls in the prescribed order, readable output, and a short explanation of appointment status, waitlist order, slot restoration, and atomic rescheduling.

## 8. Evaluation Rubric

| Assessment area | Marks |
|---|---:|
| Data structure and ID generation | 10 |
| Booking validation and slot reservation | 15 |
| Waitlist validation and FIFO promotion | 20 |
| Cancellation and appointment history | 15 |
| Atomic rescheduling and slot consistency | 20 |
| Dynamic schedule and summary | 10 |
| Output, constraints, and code quality | 10 |
| **Total** | **100** |

**Interviewer tip:** Check that cancelling an appointment does not erase its history, that promotion chooses the earliest matching waitlist entry, and that a failed reschedule leaves both the appointment and availability unchanged.
