# Multi-Step Form

A modern, responsive multi-step form built with Next.js and Tailwind CSS. This form provides a smooth user experience with step-by-step progression, form validation, and a clean UI with dark mode support.

![Multi-Step Form Screenshot](https://placeholder.svg?height=400&width=800)

## Features

- 📱 Fully responsive design
- 🌙 Dark mode support
- ✅ Form validation with React Hook Form and Zod
- 🔄 Multi-step progression with visual indicators
- 🔒 Password strength meter
- 👁️ Password visibility toggle
- 📊 Form submission handling with React Query

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Hook Form](https://react-hook-form.com/) - Form validation
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation
- [React Query](https://tanstack.com/query/latest) - Data fetching and state management

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/multi-step-form.git
cd multi-step-form
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### Running the Project

To run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

To start the production server:

\`\`\`bash
npm run start
# or
yarn start
\`\`\`

## Project Structure

\`\`\`
multi-step-form/
├── app/
│   ├── globals.css        # Global styles
│   └── layout.js          # Root layout
├── components/
│   ├── MultiStepForm.jsx  # Main form component
│   ├── Step1.jsx          # Personal information form
│   ├── Step2.jsx          # Address details form
│   ├── Step3.jsx          # Account setup form
│   └── Summary.jsx        # Form summary component
├── public/
│   └── ...                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Project dependencies
\`\`\`

## Form Steps

1. **Personal Information**
   - Full Name
   - Email
   - Phone Number

2. **Address Details**
   - Street Address
   - City
   - Zip Code

3. **Account Setup**
   - Username
   - Password (with strength indicator)
   - Confirm Password

4. **Summary**
   - Review all information
   - Submit form

## Form Validation

The form uses Zod for schema validation with the following rules:

- Full Name: Required
- Email: Valid email format
- Phone Number: At least 10 digits
- Street Address: Required
- City: Required
- Zip Code: At least 5 digits
- Username: At least 4 characters
- Password: At least 6 characters
- Confirm Password: Must match password

## Customization

### Styling

The form uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the color scheme in `globals.css`
2. Adjusting the Tailwind configuration in `tailwind.config.js`
3. Updating component styles directly in their respective files

### Form Fields

To add or modify form fields:

1. Update the Zod schema in `MultiStepForm.jsx`
2. Modify the relevant step component
3. Update the summary component to display the new fields

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)
