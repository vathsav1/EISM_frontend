const usePriorityCalculator = () => {

  const calculatePriority = (urgency, impact) => {

    if (
      urgency !== "U3" &&
      impact === "I1"
    ) {
      return "P1";
    }

    if (
      (impact === "I1" && urgency === "U3") ||
      (impact === "I2" && urgency === "U1")
    ) {
      return "P2";
    }

    if (
      (impact === "I2" && urgency !== "U1") ||
      impact === "I3" ||
      urgency === "U1"
    ) {
      return "P3";
    }

    return "P4";
  };

  return { calculatePriority };
};

export default usePriorityCalculator;