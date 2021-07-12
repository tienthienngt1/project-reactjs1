import AuthContextProvider from "../contexts/AuthContext";
import PostContextProvider from "../contexts/PostContext";
import StatusContextProvider from "../contexts/StatusContext";
import Routes from "../routes";

const Provider = () => {
	return (
		<PostContextProvider>
		    <AuthContextProvider>
				<StatusContextProvider>
					<Routes />
				</StatusContextProvider>
		    </AuthContextProvider>
		</PostContextProvider>
	);
};

export default Provider;
