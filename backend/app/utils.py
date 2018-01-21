from decimal import Decimal


def get_balances(entries, convert=False):
    balances = {}

    for entry in entries:
        amount, commodity = entry.get_amount_tuple(convert=convert)
        if commodity.name not in balances:
            balances[commodity.name] = {
                'commodity': commodity,
                'amount': commodity.get_quantized_amount(Decimal('0'))
            }
        balances[commodity.name]['amount'] += amount

    return balances.values()
