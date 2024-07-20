import switchOrganizationsIcon from '../assets/icons/sidebar/switch-organization.svg'
import dashboardIcon from '../assets/icons/sidebar/switch-organization.svg'
import usersIcon from  '../assets/icons/sidebar/users.svg'
import guarantorsIcon from  '../assets/icons/sidebar/guarantors.svg'
import loansIcon from  '../assets/icons/sidebar/loans.svg'
import decisionModelIcon from  '../assets/icons/sidebar/decision-models.svg'
import savingsIcon from  '../assets/icons/sidebar/savings.svg'
import loanRequestsIcon from  '../assets/icons/sidebar/loan-requests.svg'
import whiteListIcon from  '../assets/icons/sidebar/whitelist.svg'
import karmaIcon from  '../assets/icons/sidebar/karma.svg'
import savingsProductIcon from  '../assets/icons/sidebar/savings-product.svg'
import feesAndChargesIcon from  '../assets/icons/sidebar/fees-and-charges.svg'
import transactionsIcon from  '../assets/icons/sidebar/transactions.svg'
import servicesIcon from  '../assets/icons/sidebar/services.svg'
import servicesAccountIcon from  '../assets/icons/sidebar/service-account.svg'
import settlementsIcon from  '../assets/icons/sidebar/settlements.svg'
import reportsIcon from  '../assets/icons/sidebar/reports.svg'
import preferencesIcon from  '../assets/icons/sidebar/preferences.svg'
import feesAndPricingIcon from  '../assets/icons/sidebar/fees-and-pricing.svg'
import auditLogsIcon from  '../assets/icons/sidebar/audit-logs.svg'
import chevronIcon from  '../assets/icons/sidebar/chevron.svg'
import logoutIcon from  '../assets/icons/sidebar/logout-icon.svg'





export const SidebarNavigationData = [
    {
		title: 'Switch Organization',
		icon: switchOrganizationsIcon,
		link: '/switch-organization',
        toggleIcon:chevronIcon,
		id: 1,
	},
	{
		title: 'Dashboard',
		icon: dashboardIcon,
		link: '/dashboard',
		id: 2,
	},
	{
		title: 'Customers',
		header: true,
		link: '/customers',
		id: 3,
	},
	{
		title: 'Users',
		icon: usersIcon,
		link: '/dashboard/users',
		id: 4,
	},
	{
		title: 'Guarantors',
		icon: guarantorsIcon,
		link: '/guarantors',
		id: 5,
	},
	{
		title: 'Loan',
		icon: loansIcon,
		link: '/loan',
		id: 6,
	},
	{
		title: 'Decision Models',
		icon: decisionModelIcon,
		link: '/decision-model',
		id: 7,
	},
	{
		title: 'Savings',
		icon: savingsIcon,
		link: '/savings',
		id: 8,
	},
	{
		title: 'Loan Requests',
		icon: loanRequestsIcon,
		link: '/loan-requests',
		id: 9,
	},
	{
		title: 'Whitelist',
		icon: whiteListIcon,
		link: '/whitelist',
		id: 10,
	},
	{
		title: 'Karma',
		icon: karmaIcon,
		link: '/karma',
		id: 11,
	},
	{
		title: 'Businesses',
		header: true,
		link: '/businesses',
		id: 12,
	},
	{
		title: 'Organization',
		icon: switchOrganizationsIcon,
		link: '/organization',
		id: 13,
	},
	{
		title: 'Loan Products',
		icon: loanRequestsIcon,
		link: '/loan-products',
		id: 14,
	},
	{
		title: 'Savings Products',
		icon: savingsProductIcon,
		link: '/saving-products',
		id: 15,
	},
	{
		title: 'Fees and Charges',
		icon: feesAndChargesIcon,
		link: '/fees-and-charges',
		id: 16,
	},
	{
		title: 'Transactions',
		icon: transactionsIcon,
		link: '/transactions',
		id: 17,
	},
	{
		title: 'Services',
		icon: servicesIcon,
		link: '/services',
		id: 18,
	},
	{
		title: 'Service Account',
		icon: servicesAccountIcon,
		link: '/service-account',
		id: 19,
	},
	{
		title: 'Settlements',
		icon: settlementsIcon,
		link: '/settlement',
		id: 20,
	},
	{
		title: 'Reports',
		icon: reportsIcon,
		link: '/reports',
		id: 21,
	},
	{
		title: 'Settings',
		header: true,
		link: '/settings',
		id: 22,
	},
	{
		title: 'Preferences',
		icon:preferencesIcon,
		link: '/preferences',
		id: 23,
	},
	{
		title: 'Fees and Pricing',
		icon: feesAndPricingIcon,
		link: '/fees-and-pricing',
		id: 24,
	},
	{
		title: 'Audit Logs',
		icon: auditLogsIcon,
		link: '/audit-logs',
		id: 25,
	},
	{
		title: 'Logout',
		icon:logoutIcon,
		link: '/login',
		id: 26,
	},
]