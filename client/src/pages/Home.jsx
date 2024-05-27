import BlockView from "./BlocksView";

export const Home = () => {
  return (
    <>
      <main>
        <h1>Vote Ledger</h1>
      
        <p>Vote Ledger is a decentralized voting application that.</p>
        <p>uses the StateLayer blockchain to store votes.</p>
        <BlockView/>
      </main>
    </>
  );
};