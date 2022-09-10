export const FEELSAFE_TOKENS="feelsafe-tokens";
export const TOKENS=["accessToken"];

export const getLocalStorageTokens=() => {
    const currentTokens=localStorage.getItem(FEELSAFE_TOKENS);

    let returnTokens={
        accessToken: "",
    };

    if(currentTokens) {
        TOKENS.forEach((token) => {
            returnTokens[token]=JSON.parse(currentTokens)[token];
        });
    }

    return returnTokens;
};

export const setLocalStorageTokens=(tokens) => {
    const currentTokens=getLocalStorageTokens();
    const newTokenValues={...currentTokens,...tokens};
    const tokensToSet={};

    TOKENS.forEach((token) => {
        tokensToSet[token]=newTokenValues[token];
    });

    localStorage.setItem(FEELSAFE_TOKENS,JSON.stringify(tokensToSet));
};

export const isUserLoggedIn=() => {
    const currentTokens=getLocalStorageTokens();
    return (
        currentTokens["accessToken"]&&currentTokens["accessToken"].length>0
    );
};