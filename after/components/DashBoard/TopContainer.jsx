import BurnButtonBar from "../BurnButton/BurnButtonBar.jsx"
import BurnsStatsContainer from "../BurnStatContainer/BurnsStatsContainer.jsx"
import Chainselector from "../ChainSelector/Chainselector.jsx"
import TransactionTableStyled from "../Transactions/TransactionTableStyled.jsx"
import Header from "./Header.jsx"

export const TopContainer = () => {
  return (
    <div className="top_conatiner burnpage"
        style={{ alignItems: "flex-start" }}
    >
      <Header/>
      <BurnButtonBar/>
      <BurnsStatsContainer/>
      <TransactionTableStyled/>
      <Chainselector/>
      <AppToast
        position={{ vertical: "bottom", horizontal: "center" }}
        message={toastMsg}
        severity={toastSev}
      />
    </div>
  )
}

export default TopContainer