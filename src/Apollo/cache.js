import { InvalidationPolicyCache } from 'apollo-invalidation-policies';

const cache = new InvalidationPolicyCache({
  invalidationPolicies: {},
  typePolicies: {},
});

export default cache;
