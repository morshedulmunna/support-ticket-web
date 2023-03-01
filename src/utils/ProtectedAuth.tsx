import { SingleUser } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSingleUser } from "./getUsers";
import { jwtToken } from "./jwtToken";

type Props = {};

export const ProtectedAuth = <P extends Props>(
  WrappedComponent: React.ComponentType<P>,
  roll: string
) => {
  const Wrapper = (props: P) => {
    const router = useRouter();

    const [user, setUser] = useState<SingleUser>({});
    console.log(user);

    useEffect(() => {
      getSingleUser(setUser);
    }, []);

    const token = jwtToken();
    // Check if user is authenticated

    let isAuthenticated: unknown;
    if (token && user.roll === roll) {
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
