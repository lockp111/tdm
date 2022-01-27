package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/lockp111/tdm/x/tdm/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdDeposit() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "deposit [chain-id] [transfer-in-hash] [token-address] [amount] [from] [to] [gas]",
		Short: "Broadcast message deposit",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argChainID := args[0]
			argTransferInHash := args[1]
			argTokenAddress := args[2]
			argAmount := args[3]
			argFrom := args[4]
			argTo := args[5]
			argGas := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeposit(
				clientCtx.GetFromAddress().String(),
				argChainID,
				argTransferInHash,
				argTokenAddress,
				argAmount,
				argFrom,
				argTo,
				argGas,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
