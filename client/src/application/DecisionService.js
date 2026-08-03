import SupabaseDecisionRepository from "../repositories/SupabaseDecisionRepository";
import DecisionFactory from "../../../src/factories/DecisionFactory.js";

/**
 * DecisionService
 *
 * Owns business operations for the Decision domain.
 *
 * The UI interacts with this service instead of communicating
 * directly with repositories or persistence implementations.
 */
class DecisionService {
  constructor(repository = new SupabaseDecisionRepository()) {
    this.repository = repository;
  }

  async getDecisions() {
    return this.repository.getAll();
  }

  async getDecision(id) {
    return this.repository.getById(id);
  }

  /**
   * Creates a new Decision using the canonical DecisionFactory.
   */
  async createDecision() {
    const decision = DecisionFactory.create();

    return this.repository.create(decision);
  }

  async updateDecision(id, decision) {
    return this.repository.update(id, decision);
  }

  async deleteDecision(id) {
    return this.repository.delete(id);
  }

  async approveDecision(id) {
    const decision = await this.repository.getById(id);

    if (!decision) {
      throw new Error(`Decision '${id}' not found.`);
    }

    const updatedDecision = {
      ...decision,
      identity: {
        ...decision.identity,
        status: "Approved",
      },
    };

    return this.repository.update(id, updatedDecision);
  }
}

const decisionService = new DecisionService();

export default decisionService;