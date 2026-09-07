const CONFIG = {
  // PocketBase instance URL - We will update this in Phase 2
  PB_URL: 'https://tabula-temp.pockethost.io',
  
  // Hard limits for media and interactions
  MAX_ATTACHMENT_BYTES: 10 * 1024 * 1024, // 10MB Catbox limit
  AVATAR_DIMENSION: 256,                  // 256x256 WebP
  HEARTBEAT_INTERVAL_MS: 150000,          // 2.5 minutes presence pulse
  SEARCH_DEBOUNCE_MS: 300
};

// DO NOT mutate this directly in business logic.
Object.freeze(CONFIG);