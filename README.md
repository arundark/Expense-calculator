# 💰 Expense Calculator

A modern, responsive expense tracking application built with React, TypeScript, and Bootstrap. This project allows users to add, filter, and manage their daily expenses with a clean and intuitive interface.

## ✨ Features

- **Add Expenses**: Create new expense entries with description, amount, and category
- **Filter by Category**: Filter expenses by predefined categories (Food, Utilities, Health)
- **Delete Expenses**: Remove unwanted expense entries
- **Real-time Total**: Automatic calculation of total expenses
- **Form Validation**: Robust form validation using Zod schema validation
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **TypeScript**: Full type safety throughout the application

## 🚀 Live Demo

[View Live Demo](https://github.com/arundark/Expense-calculator) <!-- Update with actual demo link -->

## 📱 Screenshots

<!-- Add screenshots here when available -->

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Bootstrap 5** - CSS framework for responsive design
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **ESLint** - Code linting and formatting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arundark/Expense-calculator.git
   cd Expense-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
src/
├── components/
│   ├── ExpenseList.tsx      # Display list of expenses
│   ├── ExpenseForm.tsx      # Add new expenses form
│   └── ExpenseFilter.tsx    # Filter expenses by category
├── expense-list/
│   └── categories.ts        # Expense categories configuration
├── assets/                  # Static assets
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css               # Global styles
```

## 🎯 Usage

### Adding an Expense
1. Fill in the expense description (3-50 characters)
2. Enter the amount ($0.01 - $100,000)
3. Select a category from the dropdown
4. Click "Submit" to add the expense

### Filtering Expenses
- Use the category filter dropdown to view expenses by specific categories
- Select "All Categories" to view all expenses

### Deleting Expenses
- Click the "Delete" button next to any expense to remove it
- The total will automatically update

## 🔧 Configuration

### Adding New Categories
To add new expense categories, edit the `src/expense-list/categories.ts` file:

```typescript
const categories = ["Food", "Utilities", "Health", "Entertainment", "Transport"] as const;
```

### Validation Rules
Form validation is configured in `ExpenseForm.tsx`:
- **Description**: 3-50 characters
- **Amount**: $0.01 - $100,000
- **Category**: Must select from available options

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Arun**
- GitHub: [@arundark](https://github.com/arundark)
- Email: adithvarun28@gmail.com

## 🙏 Acknowledgments

- Built as part of React learning journey with Mosh Hamedani's course
- Bootstrap for the responsive design framework
- React Hook Form for efficient form handling
- Zod for schema validation

## 🔮 Future Enhancements

- [ ] Data persistence with localStorage/database
- [ ] Expense editing functionality
- [ ] Date tracking for expenses
- [ ] Charts and analytics
- [ ] Export to CSV functionality
- [ ] Dark/Light theme toggle
- [ ] Monthly/yearly expense summaries

---

⭐ If you found this project helpful, please give it a star!
