import { signIn } from "next-auth/react";

import { appConfig } from "../../shared/config";
import { useMeQuery } from "../../client/generated/graphql";

export const useSignIn = async () => {
    const { data } = useMeQuery();

    return await signIn("credentials", {
        callbackUrl: `${appConfig.CLIENT_URL}/profile`,
        ...data,
        redirect: false,
    });
};
