import AuthContextProvider from "../contexts/AuthContext";
import PostContextProvider from "../contexts/PostContext";
import StatusContextProvider from "../contexts/StatusContext";
import Routes from "../routes";

const Provider = () => {
	return (
        <AuthContextProvider>
                <PostContextProvider>
				<StatusContextProvider>
					<Routes />
				</StatusContextProvider>
		    </PostContextProvider>
        </AuthContextProvider>
	);
};

export default Provider;
