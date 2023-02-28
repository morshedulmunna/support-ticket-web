import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { jwtToken } from "./jwtToken";

type Props = {};

export const ProtectedAuth = <P extends Props>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Wrapper = (props: P) => {
    const router = useRouter();

    const token = jwtToken();
    // Check if user is authenticated

    let isAuthenticated: unknown; // replace with your authentication logic
    if (token) {
      isAuthenticated = true;
    }

    useEffect(() => {
      // Redirect to login page if user is not authenticated
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    // Render the wrapped component if user is authenticated
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  Wrapper.displayName = `ProtectedAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return Wrapper;
};
