import { Idl } from "@coral-xyz/anchor";

export type Turbin3Prereq = {
  address: string;
  metadata: {
    version: string;
    name: string;
    spec: string;
    description: string;
  };
  instructions: Array<{
    name: string;
    discriminator: number[];
    accounts: Array<{
      name: string;
      writable: boolean;
      signer?: boolean;
      pda?: {
        seeds: Array<{
          kind: string;
          value?: number[];
          path?: string;
        }>;
      };
      address?: string;
    }>;
    args: Array<{
      name: string;
      type: string;
    }>;
  }>;
  accounts: Array<{
    name: string;
    discriminator: number[];
  }>;
  errors: Array<{
    code: number;
    name: string;
    msg: string;
  }>;
  types: Array<{
    name: string;
    type: {
      kind: string;
      fields: Array<{
        name: string;
        type: string;
      }>;
    };
  }>;
};

// Define the IDL object following the type
export const IDL: Idl = {
  address: "WBAQSygkwMox2VuWKU133NxFrpDZUBdvSBeaBEue2Jq",
  metadata: {
    version: "0.1.0",
    name: "Turbin3_prereq",
    spec: "0.1.0",
    description: "created with Anchor",
  },
  instructions: [
    {
      name: "complete",
      discriminator: [0, 77, 224, 147, 136, 25, 88, 76],
      accounts: [
        {
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "prereq",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [112, 114, 101, 114, 101, 113], // "prereq"
              },
              {
                kind: "account",
                path: "signer",
              },
            ],
          },
        },
        {
          name: "systemProgram",
          writable: false,
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "github",
          type: "bytes",
        },
      ],
    },
    {
      name: "update",
      discriminator: [219, 200, 88, 176, 158, 63, 253, 127],
      accounts: [
        {
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "prereq",
          writable: true,
        },
        {
          name: "systemProgram",
          writable: false,
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "github",
          type: "bytes",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "Q2Prereq2024",
      discriminator: [210, 203, 168, 103, 251, 233, 204, 6],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidGithubAccount",
      msg: "Invalid Github account",
    },
  ],
  types: [
    {
      name: "Q2Prereq2024",
      type: {
        kind: "struct",
        fields: [
          {
            name: "github",
            type: "bytes",
          },
          {
            name: "key",
            type: "pubkey",
          },
        ],
      },
    },
  ],
};