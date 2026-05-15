export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  author: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-improve-cibil-score-before-personal-loan",
    title: "How to Improve Your CIBIL Score Before Applying for a Personal Loan",
    excerpt:
      "A stronger credit profile can unlock lower rates and faster approvals. Here are practical steps that work in 60–90 days.",
    category: "Credit Score",
    date: "2026-05-08",
    readMinutes: 5,
    author: "Money Star Editorial",
    body: [
      "Lenders use your credit bureau report to price risk. Even a modest improvement in score can widen your choice of banks and reduce the interest rate you are offered.",
      "Start by clearing overdue amounts on credit cards and loans. Payment history is the largest factor in most bureau models. Set up auto-debit or calendar reminders so every EMI and minimum card payment hits before the due date.",
      "Keep credit utilisation below 30% of your total card limits. If you are consistently near the limit, consider requesting a limit increase (without spending more) or paying down balances twice a month.",
      "Avoid multiple loan enquiries in a short window. Each hard enquiry can temporarily lower your score. Use Money Star's eligibility check to compare offers with minimal impact before you formally apply with one lender.",
      "Review your report for errors — wrong PAN links, closed accounts shown as active, or duplicate entries. Dispute inaccuracies with the bureau; corrections can lift your score within a few weeks.",
    ],
  },
  {
    slug: "personal-loan-vs-credit-card-which-is-cheaper",
    title: "Personal Loan vs Credit Card: Which Is Cheaper for Large Expenses?",
    excerpt:
      "For a ₹2 lakh medical bill or renovation, the right product depends on tenure, rate and discipline. We break down the math.",
    category: "Personal Loan",
    date: "2026-05-02",
    readMinutes: 4,
    author: "Money Star Editorial",
    body: [
      "Credit cards are convenient for short-term spends you can repay within the interest-free period. Once you revolve balance, annualised rates often exceed personal loan pricing.",
      "Personal loans offer fixed EMIs over 12–60 months, making budgeting predictable. Processing fees apply upfront; factor them into your total cost comparison.",
      "For expenses you will repay over more than three months, a personal loan usually wins on total interest paid. For smaller amounts repaid within 45 days, a card may be cheaper if you avoid cash-advance fees.",
      "Money Star lets you run EMI scenarios on our calculator and compare partner offers in one place — so you pick structure first, lender second.",
    ],
  },
  {
    slug: "documents-required-for-salaried-personal-loan",
    title: "Documents Required for a Salaried Personal Loan in India",
    excerpt:
      "Keep this checklist ready for a smoother digital application with banks and NBFCs.",
    category: "Guides",
    date: "2026-04-22",
    readMinutes: 3,
    author: "Money Star Editorial",
    body: [
      "Most lenders ask for identity proof (PAN is mandatory), address proof (Aadhaar, passport or utility bill), and income proof.",
      "Salaried applicants typically submit the last three months' salary slips and six months' bank statements showing salary credits. Some banks accept only digital statements downloaded from net banking.",
      "Employment proof may include an offer letter, employee ID or HR email verification. Self-employed applicants substitute GST returns, ITR and business bank statements.",
      "Having PDFs sized under 2 MB per file speeds up upload on mobile. Money Star's apply flow captures basics first; your relationship manager shares lender-specific lists before final submission.",
    ],
  },
  {
    slug: "what-is-loan-against-property-when-to-consider",
    title: "What Is a Loan Against Property — and When Should You Consider It?",
    excerpt:
      "LAP can fund higher amounts at lower rates than unsecured credit. Understand risks and eligibility before pledging property.",
    category: "Loan Against Property",
    date: "2026-04-10",
    readMinutes: 6,
    author: "Money Star Editorial",
    body: [
      "A loan against property (LAP) is a secured loan where residential or commercial real estate is mortgaged to the lender until you repay. Because collateral reduces risk, ticket sizes and tenures are often larger than personal loans.",
      "Common uses include business working capital, children's education abroad, debt consolidation at lower rate, or major medical treatment. It is not ideal for speculative investments.",
      "Lenders assess property title, market value via approved valuers, and your repayment capacity. Co-applicants and income pooling can improve eligibility.",
      "Default carries serious consequences including recovery proceedings. Borrow only what you can service comfortably and maintain insurance on the underlying asset.",
      "Money Star works with housing finance companies and banks experienced in LAP. Speak with our team to compare LTV, processing fee and foreclosure terms.",
    ],
  },
  {
    slug: "home-loan-balance-transfer-guide-2026",
    title: "Home Loan Balance Transfer: A Simple Guide for 2026",
    excerpt:
      "Rates have moved for many borrowers. A balance transfer may cut EMI — if fees and tenure reset still make sense.",
    category: "Home Loan",
    date: "2026-03-28",
    readMinutes: 5,
    author: "Money Star Editorial",
    body: [
      "A balance transfer moves your outstanding home loan to another lender offering a lower rate or better service. You save when the interest reduction outweighs processing fee, legal charges and any top-up costs.",
      "Check whether you are on fixed or floating rate, and if a reset clause applies. Compare effective annual rate, not just headline spread over repo.",
      "Outstanding tenure matters: restarting clock on 20 years can lower EMI but increase total interest. Ask for an amortisation comparison before you sign.",
      "Money Star's home loan desk helps evaluate transfer quotes from partner banks, including informal top-up for renovation if your LTV allows.",
    ],
  },
  {
    slug: "five-mistakes-first-time-loan-borrowers-make",
    title: "Five Mistakes First-Time Loan Borrowers Make",
    excerpt:
      "From ignoring APR to borrowing more than you need — avoid these pitfalls on your first application.",
    category: "Tips",
    date: "2026-03-15",
    readMinutes: 4,
    author: "Money Star Editorial",
    body: [
      "Borrowing the maximum offered amount instead of what you need increases interest cost and EMI stress. Calculate the exact requirement plus a small buffer.",
      "Focusing only on EMI without checking processing fee, insurance bundling and prepayment penalties gives an incomplete picture. Ask for APR or total payable over tenure.",
      "Skipping the fine print on variable rates can surprise you when repo-linked EMIs rise. Stress-test your budget at +1% rate.",
      "Applying with several lenders simultaneously hurts credit score and creates confusion. Use one comparison platform, then proceed with your best match.",
      "Missing the first EMI date after disbursal sets a negative pattern on bureau. Set up auto-debit the day salary credits.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
