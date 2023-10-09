import SalesItems from "./SalesItems"
import WebAnalytics from "./WebAnalytics"
import Progress from "./Progress"

function RightColumn() {
  return (
    <div className="w-full p-2">
      <SalesItems />
      <WebAnalytics />
      <Progress />
    </div>

  )
}

export default RightColumn
