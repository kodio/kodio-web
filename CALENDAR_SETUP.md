# Calendar Setup Guide

## Overview
The calendar page displays events in a chronological list, grouped by month and date. Events are managed through the Sanity CMS.

## Accessing the Calendar
- **URL**: `/kalender`
- **Page file**: `web/src/pages/kalender.astro`

## Setting Up in Sanity CMS

### 1. Create Calendar Page Configuration
1. Go to your Sanity Studio
2. Create a new **Calendar Page** document
3. Fill in:
   - **Title**: Page title (appears in browser tab)
   - **Metadata**: Optional SEO metadata (description, image)
   - **Header**: Page header with heading, pre-heading, color, etc.

### 2. Create Events
1. In Sanity Studio, create new **Event** documents
2. Fill in the event details:
   - **Title** (required): Event name
   - **Date** (required): Event date
   - **Time** (optional): Event time (e.g., "14:00" or "14:00 - 16:00")
   - **Description** (optional): Event details
   - **Location** (optional): Where the event takes place
   - **Link** (optional): URL for more info or registration

### 3. Publish
- Events appear automatically on the calendar page once published
- Only dates with events are shown
- Events are sorted chronologically

## Features
- **Grouped by month**: Events are organized by month/year
- **Grouped by date**: Within each month, events are grouped by date
- **Norwegian formatting**: Dates are formatted in Norwegian (no-NO)
- **Responsive design**: Works on all screen sizes
- **Hover effects**: Cards have subtle interactions
- **Empty state**: Shows message when no events exist

## Styling
The calendar uses the existing design system:
- Colors from BaseLayout (orange, yellow, green palette)
- Typography (Lora for headings, Varela Round for body)
- Consistent spacing and layout

## File Structure
```
cms/schemas/
  documents/
    calendarPage.ts    # Calendar page schema
    event.ts           # Event schema
  index.ts             # Schema registration

web/src/
  components/
    Calendar.astro     # Calendar component
  pages/
    kalender.astro     # Calendar page
  lib/sanity/
    groq.ts           # Added calendar & events queries
    queries.ts        # Added fetch functions
    types.ts          # Added Event & CalendarPage types
```
