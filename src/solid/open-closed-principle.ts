//2. Open-closed principle

interface Customer {
  giveDiscount(): number;
  addLoyaltyPoint(spentAmount: number): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }

  addLoyaltyPoint(spentAmount: number): number {
    return spentAmount;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }

  addLoyaltyPoint(spentAmount: number): number {
    return spentAmount * 2;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

const premiumCustomer: PremiumCustomer = new PremiumCustomer();
const discount: Discount = new Discount();

discount.giveDiscount(premiumCustomer);
