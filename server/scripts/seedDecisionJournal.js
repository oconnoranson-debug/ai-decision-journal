import DecisionPersistence from "../../src/persistence/DecisionPersistence.js";
import nodeSupabase from "./lib/nodeSupabase.js";
import decisions from "../../src/data/decisions.js";

async function seed() {
  const persistence = new DecisionPersistence(nodeSupabase);

  console.log("Clearing existing decision data...");
  await persistence.clearDatabase();

  console.log(`Seeding ${decisions.length} decisions...`);

  for (const decision of decisions) {
    console.log(`Creating: ${decision.identity.title}`);
    await persistence.create(decision);
  }

  console.log("");
  console.log("✅ Decision Journal seeded successfully.");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});