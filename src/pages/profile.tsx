import { PageLayout } from '@/components/templates/page-layout/page-layout';
import { signOut } from 'next-auth/react';
import { useAuth } from '../hooks/useAuth';

export default function Component() {
	const { isDarkTheme, user } = useAuth();
	if (!user?.email) {
		return null;
	}

	return (
		<PageLayout isDarkTheme={isDarkTheme}>
			<h1>Perfil</h1>
			<p>Signed in as {user?.email}</p>

			<button onClick={() => signOut()}>Sign out</button>
		</PageLayout>
	);
}

/* Component.auth = {
	role: 'user',
	loading: <h1>Loading...</h1>,
	unauthorized: '/',
};
 */
