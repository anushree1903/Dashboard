import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

function CardItem() {
  return (
    <Card className="max-w-m rounded-md bg-white shadow-md shadow-gray-700 ">
    <Flex justifyContent="between" alignItems="center">
    <Text className="text-gray-600 text-sm ">Sales</Text>
     <BadgeDelta deltaType="moderateIncrease" className="bg-green-100 rounded-md text-green-600 font-semibold ">+25.5%</BadgeDelta> 
    </Flex>
    <Metric className="text-gray-600 text-xl" >$ 54,743</Metric>
  </Card>
  )
}

export default CardItem
