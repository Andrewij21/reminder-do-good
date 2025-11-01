# 🌱 Reminder Do Good

> A little kindness every day — because small acts can change the world.

A beautiful web application that provides daily reminders for small acts of kindness. Designed to help people build positive habits and spread goodness in the world, one kind act at a time.

## 🎯 Purpose

Reminder Do Good is a simple yet powerful app that encourages users to perform small acts of kindness daily. Whether it's smiling at a stranger, thanking a colleague, or simply being present—every act of kindness matters and creates ripples of positive change.

## ✨ Features

### 💌 Daily Kindness Card

- Displays a random kindness suggestion each day
- Beautiful, motivational card design
- "Next Goodness" button to explore other kindness ideas
- Mark acts as complete with the "I Did It!" button

### 📊 Progress Tracker

- Track your kindness journey with points and statistics
- View your acts completed today, this week, and this month
- Visual representation of your positive impact
- Encouraging progress bars and stats

### 📱 Share Kindness

- Share your acts of kindness with the world
- Multiple sharing options: WhatsApp, Twitter/X, Email, and Copy Link
- Inspire others to join the kindness movement
- Beautiful share page for recipients

### 🌙 Dark & Light Mode

- Toggle between dark and light themes
- Eye-friendly design in any lighting condition
- Preference is saved for next visit

### 🏠 Multiple Pages

- **Home (`/`)** - Daily kindness reminders and tracking
- **Stats (`/stats`)** - Detailed progress and statistics
- **About (`/about`)** - Learn about the mission and vision
- **Share (`/share/:id`)** - Shareable kindness act pages

## 🚀 Getting Started

### Installation

1. **Clone the repository or download the project**
   \`\`\`bash
   git clone <repository-url>
   cd reminder-do-good
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the app in action.

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Beautiful, accessible components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth, delightful animations
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) - Simple state management
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library

## 🎨 Design System

### Color Palette

- **Primary**: Soft, calming pastels
  - Mint Green: `#C8E6C9`
  - Soft Cream: `#FFF9E6`
  - Warm Yellow: `#FFE082`
  - Sky Blue: `#B3E5FC`
- **Neutrals**:
  - Off White: `#FAFAF8`
  - Light Gray: `#F5F5F0`
  - Dark Gray: `#2D2D2D`

### Typography

- **Headings**: Poppins - Bold, friendly, and modern
- **Body Text**: Inter - Clean, readable, and accessible
- **Line Height**: 1.5-1.6 for optimal readability

### Animations

- Smooth page transitions
- Gentle card entrance animations
- Subtle hover effects
- Floating action buttons

## 📂 Project Structure

\`\`\`
reminder-do-good/
├── app/
│ ├── layout.tsx # Main layout with navigation
│ ├── page.tsx # Home page with daily kindness card
│ ├── globals.css # Global styles and design tokens
│ ├── stats/
│ │ └── page.tsx # Statistics and progress page
│ ├── about/
│ │ └── page.tsx # About mission and vision
│ └── share/
│ └── [id]/
│ └── page.tsx # Shareable kindness page
├── components/
│ ├── navigation.tsx # Navigation bar
│ ├── kindness-card.tsx # Daily kindness card component
│ ├── share-dialog.tsx # Share functionality
│ └── ui/ # shadcn/ui components
├── lib/
│ ├── store.ts # Zustand state management
│ └── kindness-data.ts # Kindness suggestions data
└── public/ # Static assets
\`\`\`

## 💡 How to Use

### 1. Get Your Daily Kindness Reminder

- Open the home page and see today's kindness suggestion
- Click "Next Goodness" to explore other ideas

### 2. Mark It Complete

- When you complete an act of kindness, click "I Did It!"
- Earn points for each completed act

### 3. Track Your Progress

- Visit the Stats page to see your total acts completed
- View statistics for today, this week, and this month
- Get motivated by your positive impact

### 4. Share Your Kindness

- Click the Share button on any kindness card
- Choose your preferred platform to spread the message
- Inspire others to join the kindness movement

### 5. Toggle Dark Mode

- Use the theme toggle in the navigation
- Enjoy the app in your preferred lighting

## 🎯 Example Kindness Acts

- 😊 Smile at a stranger today
- 📧 Send a message to an old friend and ask how they're doing
- 🙏 Give a genuine compliment to someone at work
- 💡 Turn off lights you're not using to save energy
- 👂 Spend 10 minutes without your phone and listen to calming music
- 🤝 Help someone carry their bags
- 📞 Call a family member you haven't spoken to in a while
- 💝 Leave a kind note for someone

## 🚀 Future Enhancements

- [ ] Email reminders for daily kindness notifications
- [ ] Progressive Web App (PWA) support
- [ ] Browser notifications
- [ ] Community leaderboard
- [ ] Kindness act categories
- [ ] Mobile app version
- [ ] Multilingual support
- [ ] Integration with charitable organizations
- [ ] Weekly kindness challenges

## 💻 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click!

\`\`\`bash
npm run build
npm start
\`\`\`

## 📝 Environment Variables

This app runs entirely on the client side with no external dependencies. However, if you plan to add backend features in the future, create a `.env.local` file:

\`\`\`
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

## 🤝 Contributing

We'd love your contributions! Ways to help:

- 💡 Suggest new kindness acts
- 🐛 Report bugs and issues
- 🎨 Improve the design
- ✨ Add new features
- 📖 Improve documentation

## 📄 License

This project is open source and available under the MIT License.

## ❤️ About

Reminder Do Good was created with the belief that small acts of kindness can create meaningful change in the world. Whether used by individuals, schools, communities, or organizations, this app aims to make kindness a daily habit.

**Manfaat Nyata:**

- Helps build positive daily habits
- Can be used by schools, communities, and churches
- Increases empathy and happiness
- Potential for mobile app development (PWA)

---

**Made with ❤️ to spread kindness around the world.**

_"In a world where you can be anything, be kind."_
