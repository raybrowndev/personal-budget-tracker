# Recipe: Budget App Dashboard (Next.js + shadcn/ui + Tailwind)

This file is the build checklist + user stories + edge cases + tests for the Budget App UI and flows.

---

## 1) Primary pages and flow

### Pages
- **/dashboard**
- **/transactions**

### Global actions
- **Add Income** button (separate)
- **Add Expense** button (separate)
  - Both open the same “Add Transaction” UI, pre-selecting the type.

---

## 2) Dashboard page spec (`/dashboard`)

### Header
- Top-left: **“December Budget”** (dynamic based on selected month)
- Optional: month selector (not required for V1 if you’re using “current month”)

### Summary cards row (top)
1) **Current Balance**
2) **Total Income (Month)**
3) **Total Expenses + Bills (Month)** (expenses and bills combined)
4) **Savings**
   - Shows **total savings (month or overall—choose one and be consistent)**
   - **Progress bar** based on savings goal
   - Text like: `£420 / £800 goal`

### Chart section
- **Bar chart: Income vs Outgoings**
  - Outgoings = Expenses + Bills (combined)
- Toggle: **Month / Year**
  - Month view: daily or weekly bars (choose one)
  - Year view: monthly bars (Jan–Dec)

### Recent transactions (bottom)
- Table of **recent transactions**, max **6 rows**
- CTA button: **“View all transactions”** → `/transactions`

---

## 3) Transactions page spec (`/transactions`)

### Header controls
- Toggle: **Month / Year**
- Optional filters (V1 recommended):
  - Category
  - Type (Income / Expense / Bill / Saving)
  - Date range (auto from toggle, plus custom later)

### Full table
- Shows **all transactions** for selected period (month or year)
- Sortable columns (V1 recommended):
  - Date, Type, Category, Amount, Notes, Emoji
- Row actions:
  - Edit
  - Delete

---

## 4) Add Transaction (Dialog/Drawer) spec

### Entry points
- **Add Income** button → opens form with Type = Income
- **Add Expense** button → opens form with Type = Expense

### Fields (required unless noted)
- **Type**: Income | Expense | Bill | Saving
- **Category**
  - Select from preset categories (based on “budget categories”)
  - Option: **“+ Add new category”**
- **Amount**
- **Date**
- **Notes** (optional)
- **Emoji selection** (optional but highly visible in UI)

### Behavior
- On submit:
  - Appears immediately in recent transactions
  - Updates dashboard cards
  - Updates chart data

---

## 5) Core data model (V1)

### Transaction
- id
- type: `income | expense | bill | saving`
- categoryId (nullable if you allow “Uncategorised”)
- amount (decimal)
- date (ISO)
- notes (string, optional)
- emoji (string, optional)
- createdAt / updatedAt

### Category
- id
- name
- kind (optional): can match allowed transaction types
- emoji (optional default)
- createdAt

### Savings goal
- savingsGoalAmount (number)
- (Optional) savingsGoalPeriod: monthly/yearly

---

## 6) Features as user stories (checklist)

### A) Dashboard
- [ ] As a user, I can see “{Month} Budget” so I know which period I’m viewing.
- [ ] As a user, I can see my **current balance** so I know where I stand.
- [ ] As a user, I can see **total income (month)** so I know what came in.
- [ ] As a user, I can see **total expenses + bills (month)** so I know what went out.
- [ ] As a user, I can see **total savings + a progress bar** so I can track my goal.
- [ ] As a user, I can toggle the chart between **month and year**, so I can zoom in/out.
- [ ] As a user, I can see my **6 most recent transactions** so I can quickly verify activity.
- [ ] As a user, I can click **View all transactions** so I can manage everything in one place.

**Edge cases**
- No transactions yet → empty state + CTA (“Add Income” / “Add Expense”)
- Savings goal is 0 or unset → show “Set a savings goal” state or hide progress
- Negative balance → display clearly, avoid scary red-only reliance (also show minus sign)
- Very large numbers → formatting, wrapping, and alignment in cards/table

**Tests**
- Dashboard cards match summed transactions for selected month
- Expenses + Bills are combined correctly
- Savings progress clamps at 100% if exceeded
- Recent transactions table never shows more than 6

---

### B) Transactions list
- [ ] As a user, I can view a full table of transactions so I can manage my money.
- [ ] As a user, I can toggle between **month and year** so I can change the reporting window.
- [ ] As a user, I can sort by date and amount so I can inspect patterns.
- [ ] As a user, I can edit a transaction so I can correct mistakes.
- [ ] As a user, I can delete a transaction so I can remove incorrect entries.

**Edge cases**
- Editing a transaction changes type (expense → bill) → totals and chart should update
- Deleting a transaction that affects “recent list” → list should refill correctly
- Same-day multiple transactions → stable sorting

**Tests**
- Toggle month/year updates table rows and totals consistently
- Sorting behaves correctly for decimals and dates
- Edit and delete operations update dashboard stats without refresh (or with a clear loading state)

---

### C) Add Transaction
- [ ] As a user, I can click **Add Income** so the form starts as Income.
- [ ] As a user, I can click **Add Expense** so the form starts as Expense.
- [ ] As a user, I can choose **Income/Expense/Bill/Saving** so I can classify my entry.
- [ ] As a user, I can choose a **category** so I can group my spending.
- [ ] As a user, I can add a **new category** from inside the form so I don’t have to leave.
- [ ] As a user, I can add amount/date/notes/emoji so the record is complete and readable.

**Validation rules (suggested)**
- Amount > 0
- Date required
- Category required (or default to “Uncategorised”)
- Notes max length (e.g., 200 chars)
- Emoji is optional

**Edge cases**
- Amount input: commas, currency symbols, decimals (sanitize)
- Category creation duplicates → warn or allow but highlight conflict
- Future date entries (allowed or blocked — pick one)
- Saving type: decide whether it affects balance the same as expense or is separate accounting
  - Recommended V1: saving still counts as outflow, but also increments “savings total”

**Tests**
- Add Income button preselects type = income
- Add Expense button preselects type = expense
- Creating a new category makes it immediately selectable and selected
- Submitting updates dashboard cards + chart + tables

---

## 7) Calculations (source of truth)

### For a selected period (month or year)
- **Total Income** = sum(amount where type = income)
- **Total Outgoings** = sum(amount where type IN (expense, bill))
- **Total Savings** = sum(amount where type = saving)
- **Current Balance** (pick one logic and stick to it):
  - Option A (simple): `income - (expense + bill + saving)`
  - Option B (savings not treated as spend): `income - (expense + bill)` and show savings separately
  - ✅ Recommended: **Option A** for clarity (savings is money moved out of available spending)

### Savings progress
- `progress = totalSavings / savingsGoalAmount`
- Clamp to 0–1 for UI

---

## 8) UI components mapping (shadcn/ui friendly)

- Layout: `Sidebar` (or custom), `Breadcrumb` (optional)
- Cards: `Card`, `CardHeader`, `CardContent`
- Chart container: `Card` + `Tabs` or `ToggleGroup` (Month/Year)
- Recent transactions: `Table`
- Full transactions: `Table` or DataTable pattern
- Add transaction: `Dialog` (desktop) + `Drawer/Sheet` (mobile)
- Inputs: `Input`, `Textarea`, `Select`, `Popover + Calendar`
- Feedback: `Toast`, `Alert`, `Skeleton`

---

## 9) MVP Definition of Done
- [ ] `/dashboard` matches the exact layout requirements (header, 4 cards, chart w/ toggle, recent table max 6 + CTA)
- [ ] `/transactions` shows full table with month/year toggle
- [ ] Add Income and Add Expense are separate buttons and correctly prefill the form
- [ ] Add Transaction supports type (income/expense/bill/saving), category (with add new), amount, date, notes, emoji
- [ ] All totals and chart data update correctly
- [ ] Empty/loading/error states exist for both pages and the form

---

## 10) Quick test plan (practical)

### Unit tests
- Totals calculation for each type
- Combined outgoings (expense + bill)
- Savings progress clamping

### Integration tests
- Add transaction → appears in recent list + updates cards + chart
- Edit transaction type → totals update correctly
- Delete transaction → removed from tables + recalculations correct

### UI tests
- Month/Year toggle updates chart and tables consistently
- Recent table never exceeds 6 rows
- Add category inline works and is immediately selectable