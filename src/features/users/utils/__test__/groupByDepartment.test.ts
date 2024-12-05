import { groupByDepartment } from "@/features/users";
import { IUser } from "@/features/users";

describe("groupByDepartment", () => {
  const mockUsers: IUser[] = [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      maidenName: "Smith",
      age: 28,
      gender: "female",
      email: "emily.johnson@example.com",
      phone: "+1 234-567-8901",
      username: "emilyj",
      password: "password",
      birthDate: "1995-01-01",
      image: "",
      bloodGroup: "A+",
      height: 170,
      weight: 65,
      eyeColor: "Brown",
      hair: { color: "Brown", type: "Curly" },
      ip: "192.168.1.1",
      address: {
        address: "123 Main St",
        city: "Springfield",
        state: "IL",
        stateCode: "IL",
        postalCode: "62701",
        coordinates: { lat: 39.7817, lng: -89.6501 },
        country: "United States",
      },
      macAddress: "00:1A:2B:3C:4D:5E",
      university: "University of Springfield",
      bank: {
        cardExpire: "12/25",
        cardNumber: "1234567890123456",
        cardType: "Visa",
        currency: "USD",
        iban: "US12345678901234567890",
      },
      company: {
        department: "Engineering",
        name: "TechCorp",
        title: "Engineer",
        address: {
          address: "456 Elm St",
          city: "Metropolis",
          state: "NY",
          stateCode: "NY",
          postalCode: "10001",
          coordinates: { lat: 40.7128, lng: -74.006 },
          country: "United States",
        },
      },
      ein: "123-45-6789",
      ssn: "987-65-4321",
      userAgent: "Mozilla/5.0",
      crypto: { coin: "Bitcoin", wallet: "abc123", network: "ERC20" },
      role: "admin",
    },
    {
      id: 2,
      firstName: "Michael",
      lastName: "Williams",
      maidenName: "",
      age: 35,
      gender: "male",
      email: "michael.williams@example.com",
      phone: "+1 987-654-3210",
      username: "michaelw",
      password: "password",
      birthDate: "1988-02-15",
      image: "",
      bloodGroup: "O-",
      height: 180,
      weight: 75,
      eyeColor: "Blue",
      hair: { color: "Blonde", type: "Straight" },
      ip: "192.168.1.2",
      address: {
        address: "789 Oak St",
        city: "Smallville",
        state: "CA",
        stateCode: "CA",
        postalCode: "90210",
        coordinates: { lat: 34.0522, lng: -118.2437 },
        country: "United States",
      },
      macAddress: "5E:4D:3C:2B:1A:00",
      university: "University of Smallville",
      bank: {
        cardExpire: "11/24",
        cardNumber: "6543210987654321",
        cardType: "MasterCard",
        currency: "USD",
        iban: "US09876543210987654321",
      },
      company: {
        department: "Engineering",
        name: "TechCorp",
        title: "Manager",
        address: {
          address: "456 Elm St",
          city: "Metropolis",
          state: "NY",
          stateCode: "NY",
          postalCode: "10001",
          coordinates: { lat: 40.7128, lng: -74.006 },
          country: "United States",
        },
      },
      ein: "987-65-4321",
      ssn: "123-45-6789",
      userAgent: "Mozilla/5.0",
      crypto: { coin: "Ethereum", wallet: "def456", network: "ERC20" },
      role: "user",
    },
  ];

  it("should group users by department with accurate statistics", () => {
    const result = groupByDepartment(mockUsers);

    expect(result).toEqual({
      Engineering: {
        male: 1,
        female: 1,
        ageRange: "28-35",
        hair: { Brown: 1, Blonde: 1 },
        addressUser: {
          EmilyJohnson: "62701",
          MichaelWilliams: "90210",
        },
      },
    });
  });

  it("should return an empty object for an empty user list", () => {
    const result = groupByDepartment([]);
    expect(result).toEqual({});
  });

  it("should handle single user input correctly", () => {
    const result = groupByDepartment([mockUsers[0]]);
    expect(result).toEqual({
      Engineering: {
        male: 0,
        female: 1,
        ageRange: "28-28",
        hair: { Brown: 1 },
        addressUser: {
          EmilyJohnson: "62701",
        },
      },
    });
  });

  it("should handle multiple departments correctly", () => {
    const additionalUser: IUser = {
      id: 3,
      firstName: "Sarah",
      lastName: "Connor",
      maidenName: "",
      age: 30,
      gender: "female",
      email: "sarah.connor@example.com",
      phone: "+1 555-555-5555",
      username: "sarahc",
      password: "password",
      birthDate: "1993-03-21",
      image: "",
      bloodGroup: "B+",
      height: 165,
      weight: 60,
      eyeColor: "Green",
      hair: { color: "Black", type: "Wavy" },
      ip: "192.168.1.3",
      address: {
        address: "321 Pine St",
        city: "Gotham",
        state: "NJ",
        stateCode: "NJ",
        postalCode: "07030",
        coordinates: { lat: 40.743, lng: -74.0324 },
        country: "United States",
      },
      macAddress: "AA:BB:CC:DD:EE:FF",
      university: "Gotham University",
      bank: {
        cardExpire: "10/23",
        cardNumber: "1122334455667788",
        cardType: "Visa",
        currency: "USD",
        iban: "US11223344556677889900",
      },
      company: {
        department: "Marketing",
        name: "MarketCorp",
        title: "Analyst",
        address: {
          address: "654 Maple St",
          city: "Star City",
          state: "CA",
          stateCode: "CA",
          postalCode: "90001",
          coordinates: { lat: 34.0522, lng: -118.2437 },
          country: "United States",
        },
      },
      ein: "555-55-5555",
      ssn: "666-66-6666",
      userAgent: "Mozilla/5.0",
      crypto: { coin: "Litecoin", wallet: "ghi789", network: "ERC20" },
      role: "user",
    };

    const result = groupByDepartment([...mockUsers, additionalUser]);

    expect(result).toEqual({
      Engineering: {
        male: 1,
        female: 1,
        ageRange: "28-35",
        hair: { Brown: 1, Blonde: 1 },
        addressUser: {
          EmilyJohnson: "62701",
          MichaelWilliams: "90210",
        },
      },
      Marketing: {
        male: 0,
        female: 1,
        ageRange: "30-30",
        hair: { Black: 1 },
        addressUser: {
          SarahConnor: "07030",
        },
      },
    });
  });

  it("should correctly update ageRange with varied ages", () => {
    const usersWithVariedAges: IUser[] = [
      { ...mockUsers[0], age: 25 },
      { ...mockUsers[1], age: 40 },
    ];

    const result = groupByDepartment(usersWithVariedAges);

    expect(result.Engineering.ageRange).toBe("25-40");
  });

  it("should handle users with the same hair color", () => {
    const usersWithSameHairColor: IUser[] = [
      { ...mockUsers[0], hair: { color: "Red", type: "Curly" } },
      { ...mockUsers[1], hair: { color: "Red", type: "Straight" } },
    ];

    const result = groupByDepartment(usersWithSameHairColor);

    expect(result.Engineering.hair).toEqual({ Red: 2 });
  });

  it("should map full names to postal codes correctly", () => {
    const result = groupByDepartment(mockUsers);

    expect(result.Engineering.addressUser).toEqual({
      EmilyJohnson: "62701",
      MichaelWilliams: "90210",
    });
  });

  it("should handle users with missing gender information", () => {
    const userWithMissingGender: IUser = { ...mockUsers[0], gender: undefined };

    const result = groupByDepartment([userWithMissingGender]);

    expect(result.Engineering.male).toBe(0);
    expect(result.Engineering.female).toBe(0);
  });

  it("should handle users with missing hair color", () => {
    const userWithMissingHairColor: IUser = {
      ...mockUsers[0],
      hair: { color: undefined, type: "Curly" },
    };

    const result = groupByDepartment([userWithMissingHairColor]);

    expect(result.Engineering.hair).toEqual({ undefined: 1 });
  });
});
