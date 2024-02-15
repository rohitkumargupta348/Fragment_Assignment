import BurnButtonBarDes from "../BurnButtonBarDes"
import BurnButtonBarInput from "../BurnButtonInput"
import BurnButtonBarLinks from "../BurnButtonBarLinks"

const BurnButtonBar = () => {
  return (
    <>
    <BurnButtonBarDes/>
    <BurnButtonBarInput/>
    <Button
      variant="outlined"
      onClick={executeBurn}
      startIcon={
      txProgress ? (
        <CircularProgress size={20} color="inherit" />
      ) : (<AppIcon
      url="/icons/fire.svg"
      fill={IconFilter.primary}
      size={1.5}
      margin={0}
      />
      )
    }
    ><span>{txButton}</span>
    </Button>
    <BurnButtonBarLinks/>
    </>
  )
}

export default BurnButtonBar