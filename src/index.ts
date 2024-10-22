export const KATANA_CHAIN_ID = "0x4b4154414e41";

export const test_accounts = [
  {
    contract_address:
      "0x127fd5f1fe78a71f8bcd1fec63e3fe2f0486b6ecd5c86a0466c3a21fa5cfcec",
    public_key:
      "0x33246ce85ebdc292e6a5c5b4dd51fab2757be34b8ffda847ca6925edf31cb67",
    private_key:
      "0xc5b2fcab997346f3ea1c00b002ecf6f382c5f9c9659a3894eb783c5320f912",
  },
  {
    contract_address:
      "0x13d9ee239f33fea4f8785b9e3870ade909e20a9599ae7cd62c1c292b73af1b7",
    public_key:
      "0x4c339f18b9d1b95b64a6d378abd1480b2e0d5d5bd33cd0828cbce4d65c27284",
    private_key:
      "0x1c9053c053edf324aec366a34c6901b1095b07af69495bffec7d7fe21effb1b",
  },
  {
    contract_address:
      "0x17cc6ca902ed4e8baa8463a7009ff18cc294fa85a94b4ce6ac30a9ebd6057c7",
    public_key:
      "0x16e375df37a7653038bd9eccd767e780c2c4d4c66b4c85f455236a3fd75673a",
    private_key:
      "0x14d6672dcb4b77ca36a887e9a11cd9d637d5012468175829e9c6e770c61642",
  },
  {
    contract_address:
      "0x2af9427c5a277474c079a1283c880ee8a6f0f8fbf73ce969c08d88befec1bba",
    public_key:
      "0x2b191c2f3ecf685a91af7cf72a43e7b90e2e41220175de5c4f7498981b10053",
    private_key: "0x1800000000300000180000000000030000000000003006001800006600",
  },
  {
    contract_address:
      "0x359b9068eadcaaa449c08b79a367c6fdfba9448c29e96934e3552dab0fdd950",
    public_key:
      "0x640466ebd2ce505209d3e5c4494b4276ed8f1cde764d757eb48831961f7cdea",
    private_key:
      "0x2bbf4f9fd0bbb2e60b0316c1fe0b76cf7a4d0198bd493ced9b8df2a3a24d68a",
  },
  {
    contract_address:
      "0x4184158a64a82eb982ff702e4041a49db16fa3a18229aac4ce88c832baf56e4",
    public_key:
      "0x4b076e402835913e3f6812ed28cef8b757d4643ebf2714471a387cb10f22be3",
    private_key:
      "0x6bf3604bcb41fed6c42bcca5436eeb65083a982ff65db0dc123f65358008b51",
  },
  {
    contract_address:
      "0x42b249d1633812d903f303d640a4261f58fead5aa24925a9efc1dd9d76fb555",
    public_key:
      "0x73c8a29ba0e6a368422d0551b3f45a30a27166b809ba07a41a1bc434b000ba7",
    private_key:
      "0x283d1e73776cd4ac1ac5f0b879f561bded25eceb2cc589c674af0cec41df441",
  },
  {
    contract_address:
      "0x4e0b838810cb1a355beb7b3d894ca0e98ee524309c3f8b7cccb15a48e6270e2",
    public_key:
      "0x570258e7277eb345ab80803c1dc5847591efd028916fc826bc7cd47ccd8f20d",
    private_key:
      "0x736adbbcdac7cc600f89051db1abbc16b9996b46f6b58a9752a11c1028a8ec8",
  },
  {
    contract_address:
      "0x5b6b8189bb580f0df1e6d6bec509ff0d6c9be7365d10627e0cf222ec1b47a71",
    public_key:
      "0x4c0f884b8e5b4f00d97a3aad26b2e5de0c0c76a555060c837da2e287403c01d",
    private_key:
      "0x33003003001800009900180300d206308b0070db00121318d17b5e6262150b",
  },
  {
    contract_address:
      "0x6677fe62ee39c7b07401f754138502bab7fac99d2d3c5d37df7d1c6fab10819",
    public_key:
      "0x1e8965b7d0b20b91a62fe515dd991dc9fcb748acddf6b2cf18cec3bdd0f9f9a",
    private_key:
      "0x3e3979c1ed728490308054fe357a9f49cf67f80f9721f44cc57235129e090f4",
  },
];

export const ETHTokenContract = {
  contract_address:
    "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
  class_hash:
    "0x02a8846878b6ad1f54f6ba46f5f40e11cee755c677f130b2c4b60566c9003f1f",
};

export const STARKTokenContract = {
  contract_address:
    "0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
  class_hash:
    "0x02a8846878b6ad1f54f6ba46f5f40e11cee755c677f130b2c4b60566c9003f1f",
};

export const UniversalDeployerContract = {
  contract_address:
    "0x41a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf",
  class_hash:
    "0x07b3e05f48f0c69e4a65ce5e076a66271a527aff2c34ce1083ec6e1526997a69",
};

export const AccountContractClass_old = {
  class_hash:
    "0x05400e90f7e0ae78bd02c77cd75527280470e2fe19c54970dd79dc37a9d3645c",
};

export const AccountContractClass = {
  class_hash:
    "0x07dc7899aa655b0aae51eadff6d801a58e97dd99cf4666ee59e704249e51adf2",
};

export type KatanaMethods = {
  dev_generateBlock: {};
  dev_nextBlockTimestamp: { result: number };
  dev_increaseNextBlockTimestamp: { params: { amount: number } };
  dev_setNextBlockTimestamp: { params: { timestamp: number } };

  ///
  katana_predeployedAccounts: { result: unknown }; // TODO

  ///
  torii_getTransactions: { params: [unknown] }; // TODO
};
